import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-foreground">
              SCADA Docs
            </Link>
            <div className="flex gap-8">
              <Link to="/" className="text-foreground font-medium">
                Главная
              </Link>
              <Link to="/instructions" className="text-muted-foreground hover:text-foreground transition-colors">
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

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Документация Tibbo Aggregate SCADA HMI
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Руководства и примеры работы с web-клиентом версии 6.34
          </p>
          <Link to="/instructions">
            <Button size="lg" className="text-lg px-8">
              Начать работу
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1">
            <Link to="/instructions">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-primary/10 rounded-full">
                  <Icon name="BookOpen" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Инструкции
                </h3>
                <p className="text-muted-foreground">
                  Пошаговые руководства по настройке и работе с системой
                </p>
              </div>
            </Link>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1">
            <Link to="/examples">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-primary/10 rounded-full">
                  <Icon name="Code" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Примеры
                </h3>
                <p className="text-muted-foreground">
                  Готовые примеры конфигураций и настроек для типовых задач
                </p>
              </div>
            </Link>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1">
            <Link to="/faq">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-primary/10 rounded-full">
                  <Icon name="HelpCircle" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  FAQ
                </h3>
                <p className="text-muted-foreground">
                  Ответы на часто задаваемые вопросы и решение проблем
                </p>
              </div>
            </Link>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="flex items-start gap-6">
              <div className="p-3 bg-white rounded-lg">
                <Icon name="Lightbulb" size={32} className="text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Быстрый старт: Ввод данных через дашборд
                </h2>
                <p className="text-muted-foreground mb-6">
                  Самый простой способ организовать ввод данных в SCADA-систему — использовать 
                  текстовое поле на дашборде с привязкой к записываемой переменной. Этот метод 
                  не требует программирования и настраивается за несколько минут.
                </p>
                <Link to="/instructions">
                  <Button variant="outline">
                    Читать инструкцию
                    <Icon name="ChevronRight" size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Основные возможности
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="Check" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Двусторонняя привязка данных
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Автоматическая синхронизация значений между интерфейсом и переменными системы
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="Check" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Валидация и форматирование
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Проверка корректности данных и автоматическое форматирование значений
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="Check" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Гибкая система прав
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Управление доступом к переменным на уровне пользователей и групп
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="Check" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    История изменений
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Автоматическое сохранение истории значений переменных для аудита и анализа
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <footer className="border-t border-border bg-muted/30 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-muted-foreground text-sm">
            <p>Документация для Tibbo Aggregate SCADA HMI v.6.34</p>
            <p className="mt-2">Создано для упрощения работы с web-клиентом системы</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
