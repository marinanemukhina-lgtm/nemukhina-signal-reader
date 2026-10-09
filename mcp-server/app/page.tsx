import type { Metadata } from 'next';
export const metadata: Metadata = {
 title: 'Nemukhina Signal Reader — анализ сигналов и неопределённости',
 description:'Методология Марины Немухиной и публичный MCP-сервер для поиска научных исследований и существующих решений.'
};
const base='https://github.com/marinanemukhina-lgtm/nemukhina-signal-reader';
export default function Home(){
 return <main style={{fontFamily:'system-ui,-apple-system,Segoe UI,sans-serif',maxWidth:850,margin:'0 auto',padding:'min(8vw,64px) 24px',color:'#172526',lineHeight:1.65}}>
  <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:55}}>
   <div style={{width:44,height:44,borderRadius:12,background:'#172425',color:'#e8c29c',fontSize:26,textAlign:'center',lineHeight:'44px'}}>◈</div>
   <span style={{fontSize:13,letterSpacing:2,textTransform:'uppercase'}}>Nemukhina System</span>
  </div>
  <p style={{color:'#9b795c',fontSize:13,letterSpacing:2,textTransform:'uppercase'}}>Исследование сигналов и состояний</p>
  <h1 style={{fontSize:'clamp(36px,7vw,66px)',letterSpacing:'-0.05em',fontWeight:450,lineHeight:1.07,margin:'12px 0 24px'}}>Nemukhina<br/>Signal Reader</h1>
  <p style={{fontSize:21,maxWidth:620}}>Расширяет поле возможного.</p>
  <p style={{maxWidth:640}}>Анализ конкурирующих гипотез, происхождения сигналов, причинности и неопределённости. Публичные инструменты позволяют искать научные публикации и существующие реализации, сохраняя ссылки на источники.</p>
  <div style={{display:'flex',flexWrap:'wrap',gap:18,marginTop:36}}>
   <a style={{color:'#172526',fontWeight:600}} href={base+'/releases/latest'}>Скачать плагин ↗</a>
   <a style={{color:'#172526',fontWeight:600}} href={base+'/blob/main/INSTALL.md'}>Инструкция установки ↗</a>
   <a style={{color:'#172526',fontWeight:600}} href={base}>Исходный код ↗</a>
  </div>
  <hr style={{border:0,borderTop:'1px solid #d9ddd8',margin:'46px 0 28px'}}/>
  <h2 style={{fontSize:22,fontWeight:500}}>Внешние источники</h2>
  <p>Четыре инструмента чтения: поиск научных работ Crossref, проверка DOI, поиск публичных проектов GitHub и проверка репозиториев. Сведения об источниках не подменяют анализ гипотез и изучение первичных материалов.</p>
  <p><strong>Адрес MCP:</strong> <code style={{overflowWrap:'anywhere'}}>https://nemukhina-signal-reader-mcp.vercel.app/mcp</code></p>
  <p><a href="/health">Состояние сервера</a></p>
  <hr style={{border:0,borderTop:'1px solid #d9ddd8',margin:'46px 0 24px'}}/>
  <footer style={{fontSize:13,color:'#566463'}}>
   <p>© Марина Немухина. Оригинальные материалы — CC BY 4.0, с указанием автора и источника.</p>
   <p><a href="/privacy">Конфиденциальность</a> · <a href="/terms">Условия использования</a> · <a href={base+'/issues'}>Поддержка</a></p>
   <p>Публичные инструменты только для чтения. Не передавайте персональные данные и секреты в поисковые запросы.</p>
  </footer>
 </main>;
}