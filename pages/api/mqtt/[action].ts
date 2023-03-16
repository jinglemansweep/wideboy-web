import type { NextApiRequest, NextApiResponse } from 'next';
import * as mqtt from 'mqtt';

/*
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})
*/

const MQTT_HOST = process.env.MQTT_HOST;
const MQTT_PORT = parseInt(process.env.MQTT_PORT as string);
const MQTT_USERNAME = process.env.MQTT_USERNAME;
const MQTT_PASSWORD = process.env.MQTT_PASSWORD;
const MQTT_TOPIC_PREFIX = process.env.MQTT_TOPIC || 'wideboy';

type Data = {
  status: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res
      .status(405)
      .send({ status: 'error', error: 'Only POST requests allowed' });
    return;
  }
  const { action } = req.query;
  const client = mqtt.connect({
    protocol: 'mqtts',
    host: MQTT_HOST,
    port: MQTT_PORT,
    username: MQTT_USERNAME,
    password: MQTT_PASSWORD,
  });
  client.on('connect', function () {
    const topic = `${MQTT_TOPIC_PREFIX}/${action}`;
    const payload =
      typeof req.body === 'object' ? JSON.stringify(req.body) : req.body;
    console.log(`MQTT Connect: ${MQTT_HOST}:${MQTT_PORT}`);
    client.publish(topic, payload, { qos: 0 }, function (err) {
      if (err) {
        console.error(`MQTT Error: ${err}`);
      }
      console.log(`MQTT Publish: ${topic} => ${payload}`);
      res.status(200).json({ status: !err ? 'success' : 'fail' });
    });
  });
}
