import type {Metadata} from 'next';
import {APPROVED_DESCRIPTION} from '../lib/approved-description';
import styles from './page.module.css';

const source='https://github.com/marinanemukhina-lgtm/nemukhina-signal-reader';
const segments=APPROVED_DESCRIPTION.trim().split(/\n\n+/);

export const metadata:Metadata={
  title:'Nemukhina Signal Reader',
  description:segments[1]
};

export default function Home(){
 return <main className={styles.page}>
  <div className={styles.frame}>
   <header className={styles.topbar}>
    <span className={styles.monogram} aria-hidden="true">N</span>
    <span className={styles.brand}>NEMUKHINA SYSTEM</span>
    <a className={styles.github} href={source} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
   </header>
   <article className={styles.content}>
     {segments.map((block,index)=>{
       if(block.startsWith('# '))return <h1 className={styles.title} key={index}>{block.slice(2)}</h1>;
       if(block.startsWith('## '))return <h2 className={styles.heading} key={index}>{block.slice(3)}</h2>;
       if(block.startsWith('— ')){
         return <div className={styles.applications} key={index}>
           {block.split(/ {2}\n|\n/).filter(Boolean).map((line,n)=><p className={styles.application} key={n}>{line.trimEnd()}</p>)}
         </div>;
       }
       return <p key={index} className={index===segments.length-1?styles.signoff:styles.paragraph}>{block}</p>;
     })}
   </article>
   <nav className={styles.actions} aria-label="Доступ к проекту">
     <a className={styles.primary} href={source+'/releases/latest'}>Скачать Signal Reader <span aria-hidden="true">↗</span></a>
     <a className={styles.secondary} href="/install">Как установить <span aria-hidden="true">→</span></a>
     <a className={styles.secondary} href={source}>Исходники <span aria-hidden="true">↗</span></a>
   </nav>
   <footer className={styles.footer}>
     <div>Марина Немухина · CC BY 4.0</div>
     <div className={styles.footerLinks}>
       <a href="/privacy">Конфиденциальность</a>
       <a href="/terms">Условия использования</a>
       <a href="/health">Работа сервера</a>
     </div>
   </footer>
  </div>
 </main>;
}
