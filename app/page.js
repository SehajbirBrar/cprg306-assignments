import Link from 'next/link'
import Studentinfo from './studentinfo'

export default function Home() {
  return(
    <main>
      <h2>CPRG 306: Web Development 2 - Assignments!</h2>
      <Studentinfo />
      <p><Link href="/week2/">Week 2</Link></p>
      <p><Link href="/week3/">Week 3</Link></p>
      <p><Link href="/week4/">Week 4</Link></p>
      <p><Link href="/week5/">Week 5</Link></p>
      <p><Link href="/week6/">Week 6</Link></p>
      <p><Link href="/week7/">Week 7</Link></p>
      <p><Link href="/week8/">Week 8</Link></p>
      
    </main>
  );
}