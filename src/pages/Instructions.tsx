import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Instructions = () => {
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
              <Link to="/instructions" className="text-foreground font-medium">
                Инструкции
              </Link>
              <Link to="/examples" className="text-muted-foreground hover:text-foreground transition-colors">
                Примеры
              </Link>
              <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Инструкции
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Пошаговые руководства по работе с Tibbo Aggregate SCADA HMI
          </p>

          <div className="space-y-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Icon name="FileText" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Ввод данных через текстовое поле дашборда
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-3">
                        Шаг 1: Создание переменной
                      </h3>
                      <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>Откройте контекстное меню устройства или сервера</li>
                        <li>Выберите <span className="font-mono bg-muted px-2 py-1 rounded">Variables → Create</span></li>
                        <li>Укажите имя переменной (например, <span className="font-mono bg-muted px-2 py-1 rounded">inputValue</span>)</li>
                        <li>Выберите тип данных (String, Integer, Float и т.д.)</li>
                        <li>Установите флаг <span className="font-semibold">Writable</span> для возможности записи</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-3">
                        Шаг 2: Добавление компонента на дашборд
                      </h3>
                      <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>Откройте нужный дашборд в режиме редактирования</li>
                        <li>Из панели компонентов перетащите <span className="font-semibold">Text Field</span> на рабочую область</li>
                        <li>Или используйте кнопку <span className="font-mono bg-muted px-2 py-1 rounded">Add Widget → Input → Text Field</span></li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-3">
                        Шаг 3: Привязка к переменной
                      </h3>
                      <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>Выделите добавленное текстовое поле</li>
                        <li>В панели свойств найдите раздел <span className="font-semibold">Data Binding</span></li>
                        <li>В поле <span className="font-mono bg-muted px-2 py-1 rounded">Variable</span> нажмите кнопку выбора</li>
                        <li>Выберите созданную ранее переменную из дерева контекстов</li>
                        <li>Убедитесь, что включена опция <span className="font-semibold">Two-way binding</span></li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-3">
                        Шаг 4: Настройка события (опционально)
                      </h3>
                      <p className="mb-2">Для немедленной записи значения при изменении:</p>
                      <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>В разделе <span className="font-semibold">Events</span> найдите событие <span className="font-mono bg-muted px-2 py-1 rounded">onChange</span></li>
                        <li>Добавьте действие <span className="font-mono bg-muted px-2 py-1 rounded">Set Variable</span></li>
                        <li>Укажите целевую переменную и источник данных (значение поля)</li>
                      </ol>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                      <div className="flex items-start gap-3">
                        <Icon name="Info" size={20} className="text-blue-500 mt-0.5" />
                        <div>
                          <p className="font-semibold text-blue-900 mb-1">Совет</p>
                          <p className="text-blue-800">
                            При использовании двусторонней привязки (Two-way binding) значение автоматически 
                            записывается в переменную при потере фокуса полем или нажатии Enter.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Icon name="Settings" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Дополнительные настройки
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Валидация данных</h3>
                      <p>Используйте Expression Validator для проверки введенных данных перед записью в переменную.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Форматирование</h3>
                      <p>Настройте Format String для отображения значений в нужном формате (числа, даты, валюта).</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Права доступа</h3>
                      <p>Установите разрешения на запись переменной в зависимости от ролей пользователей.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
