import type {Metadata} from 'next';
import styles from './page.module.css';

export const metadata:Metadata={
 title:'Установка Nemukhina Signal Reader',
 description:'Понятная инструкция: как использовать методологию, как подключить поиск и что такое MCP.'
};

const release='https://github.com/marinanemukhina-lgtm/nemukhina-signal-reader/releases/tag/v1.3.0';
const download='https://github.com/marinanemukhina-lgtm/nemukhina-signal-reader/releases/download/v1.3.0/';
const repo='https://github.com/marinanemukhina-lgtm/nemukhina-signal-reader';

export default function Install(){
return <main className={styles.outer}><div className={styles.wrap}>
  <header className={styles.top}><a href="/">← Nemukhina Signal Reader</a><span>ИНСТРУКЦИЯ</span></header>
  <section className={styles.intro}>
    <p className={styles.overline}>НАЧАЛО РАБОТЫ</p>
    <h1>Как подключить<br/>Signal Reader</h1>
    <p className={styles.lead}>Signal Reader работает внутри совместимого ИИ-приложения. Выберите, что именно вам нужно: полный набор, только методология или только поиск источников.</p>
  </section>
  <section aria-labelledby="ways">
    <h2 id="ways">Выберите свой вариант</h2>
    <div className={styles.choices}>
      <a href="#full" className={styles.choice}><span className={styles.counter}>01</span><strong>Методология + поиск</strong><span>Полный набор возможностей Signal Reader</span><span className={styles.arrow}>↗</span></a>
      <a href="#skill" className={styles.choice}><span className={styles.counter}>02</span><strong>Только методология</strong><span>Анализ сигналов и конкурирующих гипотез</span><span className={styles.arrow}>↗</span></a>
      <a href="#search" className={styles.choice}><span className={styles.counter}>03</span><strong>Только поиск источников</strong><span>Научные работы и публичные проекты GitHub</span><span className={styles.arrow}>↗</span></a>
    </div>
  </section>
  <section className={styles.explain}>
    <h2>Две части одной системы</h2>
    <div className={styles.explainCols}>
      <p><strong>Скилл (Skill)</strong> — инструкции, по которым ИИ анализирует данные: отделяет факты от гипотез, сравнивает объяснения и определяет следующую проверку.</p>
      <p><strong>MCP</strong> — способ подключить ИИ к внешним инструментам. В Signal Reader он даёт поиск научных публикаций в Crossref и публичных проектов на GitHub.</p>
    </div>
    <p className={styles.emphasis}>Важно: подключение одного MCP-сервера не устанавливает методологию Signal Reader.</p>
  </section>
  <section id="full" className={styles.section}>
    <div className={styles.sectionHead}><span className={styles.counter}>01</span><h2>Полный Signal Reader</h2></div>
    <p>Для ИИ-клиентов, поддерживающих формат <strong>Agent Plugins 1.0</strong> и подключение входящих в пакет компонентов.</p>
    <ol><li>Скачайте готовый архив плагина.</li><li>В совместимом ИИ-приложении выберите установку плагина из файла.</li><li>Загрузите архив и, если потребуется, подтвердите подключение внешнего MCP-сервера.</li><li>Попросите ИИ: «Разбери ситуацию с помощью Nemukhina Signal Reader: отдели наблюдения от гипотез и предложи следующую проверку».</li></ol>
    <a className={styles.button} href={download+'Nemukhina-Signal-Reader-Plugin-v1.3.0.zip'}>Скачать полный плагин ↗</a>
    <p className={styles.note}>Поддержка ZIP и автоматического подключения MCP зависит от конкретного клиента. Наличие пакета не означает, что он устанавливается в любое ИИ-приложение.</p>
  </section>
  <section id="skill" className={styles.section}>
    <div className={styles.sectionHead}><span className={styles.counter}>02</span><h2>Только методология</h2></div>
    <p>Для ИИ-клиентов с поддержкой <strong>Skills (навыков)</strong>.</p>
    <ol><li>Скачайте архив скилла.</li><li>Установите его как навык в своём ИИ-приложении.</li><li>Попросите применить Nemukhina Signal Reader к вашей задаче.</li></ol>
    <a className={styles.button} href={download+'Nemukhina-Signal-Reader-v1.3.0.zip'}>Скачать скилл ↗</a>
    <p className={styles.note}>Внутри — правила анализа и 13 справочных разделов. Внешний поиск через MCP не подключается этим архивом автоматически.</p>
  </section>
  <section id="search" className={styles.section}>
    <div className={styles.sectionHead}><span className={styles.counter}>03</span><h2>Только поиск источников</h2></div>
    <p>Для ИИ-клиентов, поддерживающих подключение <strong>удалённых MCP-серверов по Streamable HTTP</strong>. MCP — это технический стандарт связи ИИ с инструментами, а не отдельная программа и не методология.</p>
    <ol><li>Откройте в вашем ИИ-приложении настройки внешних инструментов или MCP-серверов.</li><li>Добавьте удалённый сервер с адресом ниже.</li><li>Если приложение запрашивает тип подключения, выберите <strong>Streamable HTTP</strong>; авторизация не требуется.</li><li>Сохраните подключение и попробуйте: «Найди две научные публикации о Bayesian inverse planning с DOI и ссылками».</li></ol>
    <div className={styles.address}><span>Адрес сервера MCP</span><code>https://nemukhina-signal-reader-mcp.vercel.app/mcp</code></div>
    <p>После подключения ИИ может искать публикации Crossref, проверять DOI, находить открытые репозитории GitHub и смотреть их публичные метаданные.</p>
    <p className={styles.note}>Это инструменты только для чтения. Они не открывают закрытые репозитории, не читают автоматически полные тексты работ и не меняют данные на GitHub. Для самой методологии нужен скилл.</p>
  </section>
  <section className={styles.help}>
    <h2>А если моя программа не поддерживает установку?</h2>
    <p>Набор функций зависит от конкретного ИИ-клиента и настроек рабочего пространства. Некоторые приложения не принимают архивы плагинов или Skills, другие не позволяют подключать сторонние MCP-серверы. В таком случае используйте поддерживаемый вашим клиентом способ. Публичный выпуск GitHub ещё не означает публикацию в каталоге ChatGPT.</p>
    <p><a href={release}>Все файлы релиза v1.3.0 ↗</a> · <a href={repo+'/blob/main/INSTALL.md'}>Подробная техническая инструкция ↗</a></p>
  </section>
  <footer className={styles.footer}><span>Марина Немухина · CC BY 4.0</span><span><a href="/privacy">Конфиденциальность</a> · <a href="/terms">Условия</a> · <a href={repo+'/issues'}>Поддержка</a></span>
  <p>Не передавайте через публичные инструменты поиска пароли, токены, закрытые документы или персональные данные.</p></footer>
</div></main>;
}