import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Examples = () => {
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
              <Link to="/examples" className="text-foreground font-medium">
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
            Примеры использования
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Практические примеры работы с текстовыми полями и переменными
          </p>

          <div className="space-y-8">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="Code" size={24} className="text-primary mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Пример 1: Ввод температуры
                  </h2>
                  <p className="text-muted-foreground">
                    Создание поля для ввода заданной температуры с валидацией диапазона
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-foreground mb-2">Настройка переменной:</div>
                  <div className="text-muted-foreground space-y-1">
                    <div>Имя: <span className="text-foreground">targetTemperature</span></div>
                    <div>Тип: <span className="text-foreground">Float</span></div>
                    <div>Диапазон: <span className="text-foreground">-50 до 150</span></div>
                    <div>Writable: <span className="text-foreground">true</span></div>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-foreground mb-2">Свойства Text Field:</div>
                  <div className="text-muted-foreground space-y-1">
                    <div>Variable: <span className="text-foreground">targetTemperature</span></div>
                    <div>Format: <span className="text-foreground">0.0 °C</span></div>
                    <div>Validator: <span className="text-foreground">{`{value} >= -50 && {value} <= 150`}</span></div>
                    <div>Error Message: <span className="text-foreground">Температура должна быть от -50 до 150 °C</span></div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="Code" size={24} className="text-primary mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Пример 2: Ввод имени оператора
                  </h2>
                  <p className="text-muted-foreground">
                    Текстовое поле для идентификации пользователя с ограничением длины
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-foreground mb-2">Настройка переменной:</div>
                  <div className="text-muted-foreground space-y-1">
                    <div>Имя: <span className="text-foreground">operatorName</span></div>
                    <div>Тип: <span className="text-foreground">String</span></div>
                    <div>Writable: <span className="text-foreground">true</span></div>
                    <div>Default: <span className="text-foreground">"Не указано"</span></div>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-foreground mb-2">Свойства Text Field:</div>
                  <div className="text-muted-foreground space-y-1">
                    <div>Variable: <span className="text-foreground">operatorName</span></div>
                    <div>Max Length: <span className="text-foreground">50</span></div>
                    <div>Placeholder: <span className="text-foreground">Введите имя оператора</span></div>
                    <div>Validator: <span className="text-foreground">{`length({value}) > 0`}</span></div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="Code" size={24} className="text-primary mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Пример 3: Ввод числа с автообновлением
                  </h2>
                  <p className="text-muted-foreground">
                    Поле для ввода количества с моментальной записью при изменении
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-foreground mb-2">Настройка переменной:</div>
                  <div className="text-muted-foreground space-y-1">
                    <div>Имя: <span className="text-foreground">productCount</span></div>
                    <div>Тип: <span className="text-foreground">Integer</span></div>
                    <div>Writable: <span className="text-foreground">true</span></div>
                    <div>Min Value: <span className="text-foreground">0</span></div>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-foreground mb-2">Свойства Text Field:</div>
                  <div className="text-muted-foreground space-y-1">
                    <div>Variable: <span className="text-foreground">productCount</span></div>
                    <div>Update Mode: <span className="text-foreground">On Change</span></div>
                    <div>Two-way Binding: <span className="text-foreground">true</span></div>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <Icon name="AlertTriangle" size={20} className="text-amber-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-amber-900 mb-1">Внимание</p>
                      <p className="text-amber-800 text-sm">
                        Режим "On Change" записывает значение при каждом изменении символа. 
                        Используйте его осторожно для переменных, связанных с критичными процессами.
                      </p>
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

export default Examples;
