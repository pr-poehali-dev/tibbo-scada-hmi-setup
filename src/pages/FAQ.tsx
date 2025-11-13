import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-foreground">
              SCADA Docs
            </Link>
            <div className="flex gap-8">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Главная
              </Link>
              <Link to="/instructions" className="text-muted-foreground hover:text-foreground transition-colors">
                Инструкции
              </Link>
              <Link to="/examples" className="text-muted-foreground hover:text-foreground transition-colors">
                Примеры
              </Link>
              <Link to="/faq" className="text-foreground font-medium">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Часто задаваемые вопросы
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Ответы на распространенные вопросы о работе с переменными и дашбордами
          </p>

          <Card className="p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  <div className="flex items-start gap-3">
                    <Icon name="HelpCircle" size={20} className="text-primary mt-1" />
                    <span>Почему значение не записывается в переменную?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground ml-8 space-y-3">
                  <p>Наиболее частые причины:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Переменная не имеет флага <span className="font-semibold">Writable</span></li>
                    <li>У пользователя нет прав на запись переменной</li>
                    <li>Отсутствует привязка данных (Data Binding) или она настроена неверно</li>
                    <li>Валидатор отклоняет введенное значение</li>
                    <li>Тип данных переменной не соответствует введенному значению</li>
                  </ul>
                  <p className="mt-3">Проверьте логи системы для детальной диагностики проблемы.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  <div className="flex items-start gap-3">
                    <Icon name="HelpCircle" size={20} className="text-primary mt-1" />
                    <span>В чем разница между режимами обновления?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground ml-8 space-y-3">
                  <div>
                    <p className="font-semibold text-foreground mb-2">On Change (При изменении)</p>
                    <p>Значение записывается немедленно при каждом изменении поля. Подходит для счетчиков и полей, требующих мгновенной реакции.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">On Blur (При потере фокуса)</p>
                    <p>Значение записывается только когда пользователь покидает поле. Рекомендуется для большинства случаев, снижает нагрузку на систему.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">On Enter (По нажатию Enter)</p>
                    <p>Значение записывается только при явном подтверждении клавишей Enter. Используется для критичных операций.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  <div className="flex items-start gap-3">
                    <Icon name="HelpCircle" size={20} className="text-primary mt-1" />
                    <span>Как добавить валидацию введенных данных?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground ml-8 space-y-3">
                  <p>Существует несколько способов:</p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>
                      <span className="font-semibold text-foreground">Expression Validator</span> - в свойствах компонента 
                      укажите выражение для проверки (например, <span className="font-mono bg-muted px-2 py-1 rounded">{`{value} > 0`}</span>)
                    </li>
                    <li>
                      <span className="font-semibold text-foreground">Regular Expression</span> - используйте регулярные 
                      выражения для проверки формата (email, телефон, и т.д.)
                    </li>
                    <li>
                      <span className="font-semibold text-foreground">Custom Validator</span> - создайте функцию валидации 
                      на сервере для сложных проверок
                    </li>
                  </ol>
                  <p className="mt-3">Не забудьте указать понятное сообщение об ошибке в поле Error Message.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  <div className="flex items-start gap-3">
                    <Icon name="HelpCircle" size={20} className="text-primary mt-1" />
                    <span>Можно ли использовать одну переменную для нескольких полей?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground ml-8">
                  <p>
                    Да, это возможно и часто используется. При изменении значения в любом из привязанных 
                    полей, все остальные автоматически обновятся благодаря двусторонней привязке данных. 
                    Это полезно для отображения одного значения в разных частях дашборда или синхронизации 
                    данных между экранами.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  <div className="flex items-start gap-3">
                    <Icon name="HelpCircle" size={20} className="text-primary mt-1" />
                    <span>Как ограничить доступ к изменению переменной?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground ml-8 space-y-3">
                  <p>Настройка прав доступа выполняется на уровне переменной:</p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Откройте свойства переменной</li>
                    <li>Перейдите на вкладку <span className="font-semibold text-foreground">Permissions</span></li>
                    <li>Настройте права чтения (Read) и записи (Write) для групп пользователей</li>
                    <li>Сохраните изменения</li>
                  </ol>
                  <p className="mt-3">
                    Пользователи без прав на запись смогут видеть значение, но не изменять его. 
                    Текстовое поле автоматически станет доступным только для чтения.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  <div className="flex items-start gap-3">
                    <Icon name="HelpCircle" size={20} className="text-primary mt-1" />
                    <span>Как сохранить историю изменений переменной?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground ml-8 space-y-3">
                  <p>Для ведения истории значений переменной:</p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Откройте свойства переменной</li>
                    <li>Включите опцию <span className="font-semibold text-foreground">Enable History</span></li>
                    <li>Настройте параметры хранения (период, интервал сохранения)</li>
                    <li>При необходимости настройте события для записи истории при каждом изменении</li>
                  </ol>
                  <p className="mt-3">
                    История будет доступна для просмотра через компоненты графиков или таблиц истории на дашборде.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  <div className="flex items-start gap-3">
                    <Icon name="HelpCircle" size={20} className="text-primary mt-1" />
                    <span>Поддерживает ли web-клиент все функции текстовых полей?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground ml-8">
                  <p>
                    Web-клиент Tibbo Aggregate SCADA HMI v.6.34 поддерживает большинство функций текстовых полей, 
                    включая двустороннюю привязку данных, валидацию и форматирование. Однако некоторые расширенные 
                    функции (например, custom renderers) могут работать только в desktop-клиенте. 
                    Рекомендуется тестировать функциональность в целевом клиенте.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="p-6 mt-8 bg-blue-50 border-blue-200">
            <div className="flex items-start gap-3">
              <Icon name="Info" size={24} className="text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Не нашли ответ?</h3>
                <p className="text-blue-800">
                  Обратитесь к официальной документации Tibbo Aggregate SCADA HMI или свяжитесь с технической поддержкой 
                  для получения помощи по специфическим вопросам.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
