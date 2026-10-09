# Установка / Installation

**Nemukhina Signal Reader — Марина Немухина / Marina Nemukhina.**

Бесплатная открытая версия. Оригинальные материалы — CC BY 4.0 с указанием авторства. Это публикация в GitHub, а не одобренная карточка каталога ChatGPT.

## Выберите способ

| Задача | Что использовать |
| --- | --- |
| Полная методология и поиск источников | `Nemukhina-Signal-Reader-Plugin-v1.2.0.zip` в клиенте с поддержкой Agent Plugins 1.0 |
| Только методология | `Nemukhina-Signal-Reader-v1.2.0.zip` или `skill.zip` в клиенте с поддержкой skills |
| Поиск источников из другого ИИ-клиента | Удалённый MCP по адресу ниже |
| Собственный сервер | Исходники и инструкции в `mcp-server/` |

[Скачать релиз v1.2.0](https://github.com/marinanemukhina-lgtm/nemukhina-signal-reader/releases/tag/v1.2.0)

## Подключение MCP

- Название: `Nemukhina Signal Reader`
- URL: `https://nemukhina-signal-reader-mcp.vercel.app/mcp`
- Транспорт: **Streamable HTTP**
- Аутентификация: **нет**

Добавьте эти параметры через настройку удалённых MCP-серверов вашего клиента. Формат его локальной конфигурации может отличаться. `plugin/mcp.json` — переносимый формат Agent Plugins, а не универсальная конфигурация любого клиента. Поддержка каждой конкретной модели и оболочки отдельно не проверена.

Для ChatGPT возможность добавить MCP зависит от тарифа и правил рабочего пространства. Ошибка запрета администратора не устраняется повторной загрузкой архива.

### Что проверять после подключения

Клиент должен увидеть четыре инструмента:

1. `search_scientific_literature` — поиск библиографических записей Crossref.
2. `inspect_doi` — сведения о конкретном DOI.
3. `search_github_projects` — поиск публичных репозиториев GitHub.
4. `inspect_github_project` — метаданные конкретного публичного репозитория.

Пример запроса: «Найди одну научную работу о Bayesian inverse planning и проверь DOI найденной записи». Результат должен содержать реальные ссылки и DOI. Метаданные не заменяют чтение публикации или аудит кода.

## Методология и внешние данные

MCP предоставляет внешние данные. Правила анализа находятся в `SKILL.md` и `references/`. Для полного поведения установите скилл или плагин. Один адрес MCP не устанавливает методологию автоматически.

Если клиент не поддерживает skills, можно передать ему `SKILL.md` и нужные справочные материалы как инструкции/файлы в рамках возможностей этого клиента. Это не гарантирует одинакового поведения разных моделей.

## Данные и эксплуатация

Публичный сервер передаёт поисковые строки и идентификаторы в Crossref или GitHub. Не отправляйте секреты, токены, персональные истории и закрытые документы. Для поиска исследований используйте обезличенные формулировки. В коде нет подключения к закрытым репозиториям и операций записи.

Сервис имеет ограничения входных данных, времени и размера ответа. Инфраструктурный rate limit и массовая нагрузка не подтверждены; доступность публичного сервера и внешних API не гарантирована. Для управляемой эксплуатации разверните собственный экземпляр и настройте лимиты. Сроки хранения технических журналов Vercel требуют отдельного подтверждения владельца; это описание не заменяет политику конфиденциальности.

## English quick start

Download the portable plugin archive for an **Agent Plugins 1.0-compatible client**, the standalone skill archive for a **skills-compatible client**, or connect any client supporting **remote MCP over Streamable HTTP** to:

```text
https://nemukhina-signal-reader-mcp.vercel.app/mcp
```

No authentication. Four read-only tools retrieve public Crossref and GitHub metadata. MCP alone provides retrieval, not the analysis methodology: install the bundled skill for that workflow. Individual client compatibility has not been certified. The release is free; original materials are CC BY 4.0, attributed to Marina Nemukhina. Provider limits apply. Do not transmit secrets or personal case details.

## Поддержка / Support

[Открыть GitHub Issues](https://github.com/marinanemukhina-lgtm/nemukhina-signal-reader/issues). Не публикуйте в issue персональные данные или секреты. Срок ответа не установлен.
