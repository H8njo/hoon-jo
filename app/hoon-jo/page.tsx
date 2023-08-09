import About from '@/components/client-components/hoon-jo/About';
import Footer from '@/components/client-components/hoon-jo/Footer';
import LifeOutsideWork from '@/components/client-components/hoon-jo/LifeOutsideWork';
import Services from '@/components/client-components/hoon-jo/Services';
import { Suspense } from 'react';

async function fetchInstagram() {
  const res = await fetch(
    `https://graph.instagram.com/${process.env.INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,thumbnail_url,caption&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
  );

  if (!res.ok) {
    throw new Error('Error occurred when fetching posts');
  }

  return await res.json();
}

export default async function Post({ params }: any) {
  const instagramPromise = fetchInstagram();

  return (
    <main className="w-full h-full overflow-hidden">
      <About />
      <Services />
      <Suspense fallback={<div>Loading Contents..</div>}>
        <LifeOutsideWork instagram={instagramPromise} />
      </Suspense>
      <Footer />
    </main>
  );
}
