import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';

export default function Home() {
  const router = useRouter();
  const device = router.query.d as string;
  return <Layout device={device} />;
}
