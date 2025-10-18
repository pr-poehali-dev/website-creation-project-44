import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Author {
  id: number;
  name: string;
  avatar: string;
  bio: string;
}

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
}

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: Author;
  date: string;
  readTime: string;
  tags: string[];
  comments: Comment[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'portfolio'>('blog');
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);
  const [newComment, setNewComment] = useState<{ [key: number]: string }>({});

  const authors: Author[] = [
    {
      id: 1,
      name: 'KANDYSLY',
      avatar: 'https://api.dicebear.com/7.x/big-ears/svg?seed=KANDYSLY&backgroundColor=b6e3f4,c0aede,d1d4f9',
      bio: 'Писатель, журналист, исследователь современной культуры'
    },
    {
      id: 2,
      name: 'Bold AVANTE',
      avatar: 'https://api.dicebear.com/7.x/big-ears/svg?seed=BoldAVANTE&backgroundColor=ffd5dc,ffdfbf,d1d4f9',
      bio: 'Арт-директор, фотограф, визуальный рассказчик'
    }
  ];

  const articles: Article[] = [
    {
      id: 1,
      title: 'Искусство минимализма в современном дизайне',
      excerpt: 'Исследование того, как простота формы создаёт глубину смысла и почему "меньше" действительно означает "больше" в мире визуальных коммуникаций.',
      image: 'https://cdn.poehali.dev/projects/10fafa3b-e931-456e-84f9-b2385c78f260/files/2937fde8-d841-42f0-9183-1ca08609b766.jpg',
      author: authors[0],
      date: '15 октября 2024',
      readTime: '8 мин',
      tags: ['дизайн', 'минимализм', 'тренды'],
      comments: [
        { id: 1, author: 'Елена М.', content: 'Очень вдохновляющая статья! Полностью согласна с вашим подходом к минимализму.', date: '16 октября 2024' }
      ]
    },
    {
      id: 2,
      title: 'Цветовая психология: влияние оттенков на восприятие',
      excerpt: 'Погружение в науку о том, как цвета формируют наши эмоции, решения и общее восприятие окружающего мира.',
      image: 'https://cdn.poehali.dev/projects/10fafa3b-e931-456e-84f9-b2385c78f260/files/a5d0e017-96c1-4c06-b21b-b87fa4f06b23.jpg',
      author: authors[1],
      date: '12 октября 2024',
      readTime: '6 мин',
      tags: ['психология', 'цвет', 'исследование'],
      comments: []
    },
    {
      id: 3,
      title: 'Типографика как искусство повествования',
      excerpt: 'Как выбор шрифта меняет не только внешний вид текста, но и его эмоциональное воздействие на читателя.',
      image: 'https://cdn.poehali.dev/projects/10fafa3b-e931-456e-84f9-b2385c78f260/files/642bfb55-5bd0-4488-a6c6-057717f1ebd4.jpg',
      author: authors[0],
      date: '8 октября 2024',
      readTime: '5 мин',
      tags: ['типографика', 'искусство', 'дизайн'],
      comments: [
        { id: 2, author: 'Игорь П.', content: 'Никогда не задумывался о шрифтах так глубоко. Спасибо!', date: '9 октября 2024' },
        { id: 3, author: 'Мария К.', content: 'Отличная подборка примеров!', date: '10 октября 2024' }
      ]
    }
  ];

  const portfolio: Project[] = [
    {
      id: 1,
      title: 'Редизайн корпоративного сайта',
      description: 'Полное обновление визуальной идентичности и пользовательского опыта для технологической компании',
      image: 'https://cdn.poehali.dev/projects/10fafa3b-e931-456e-84f9-b2385c78f260/files/2937fde8-d841-42f0-9183-1ca08609b766.jpg',
      category: 'Веб-дизайн'
    },
    {
      id: 2,
      title: 'Фотопроект "Городские ритмы"',
      description: 'Исследование архитектурной геометрии и человеческих историй в современном мегаполисе',
      image: 'https://cdn.poehali.dev/projects/10fafa3b-e931-456e-84f9-b2385c78f260/files/a5d0e017-96c1-4c06-b21b-b87fa4f06b23.jpg',
      category: 'Фотография'
    },
    {
      id: 3,
      title: 'Брендинг студии йоги',
      description: 'Создание целостной визуальной системы: от логотипа до навигации в пространстве',
      image: 'https://cdn.poehali.dev/projects/10fafa3b-e931-456e-84f9-b2385c78f260/files/642bfb55-5bd0-4488-a6c6-057717f1ebd4.jpg',
      category: 'Брендинг'
    }
  ];

  const handleAddComment = (articleId: number) => {
    if (newComment[articleId]?.trim()) {
      console.log(`Adding comment to article ${articleId}:`, newComment[articleId]);
      setNewComment({ ...newComment, [articleId]: '' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">
              Креативный Журнал
            </h1>
            <nav className="flex gap-6">
              <button
                onClick={() => setActiveTab('blog')}
                className={`text-lg font-medium transition-colors ${
                  activeTab === 'blog' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Блог
              </button>
              <button
                onClick={() => setActiveTab('portfolio')}
                className={`text-lg font-medium transition-colors ${
                  activeTab === 'portfolio' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Портфолио
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {activeTab === 'blog' && (
          <div className="space-y-16 animate-fade-in">
            <section className="max-w-4xl mx-auto text-center space-y-4 mb-16">
              <h2 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
                Истории, идеи и вдохновение
              </h2>
              <p className="text-xl text-muted-foreground font-light">
                Пространство для творческих экспериментов и глубоких размышлений о дизайне, искусстве и культуре
              </p>
            </section>

            <section className="mb-16">
              <h3 className="text-2xl font-heading font-semibold mb-8">Наши авторы</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {authors.map((author) => (
                  <Card key={author.id} className="hover-scale border-border/50">
                    <CardContent className="p-6 flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={author.avatar} alt={author.name} />
                        <AvatarFallback>{author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-heading text-xl font-semibold mb-1">{author.name}</h4>
                        <p className="text-muted-foreground text-sm">{author.bio}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-heading font-semibold mb-8">Последние публикации</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <Card key={article.id} className="group overflow-hidden hover-scale border-border/50">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h4 className="font-heading text-2xl font-semibold leading-tight mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{article.excerpt}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={article.author.avatar} alt={article.author.name} />
                            <AvatarFallback>{article.author.name[0]}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{article.author.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span>{article.date}</span>
                          <span>·</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                          className="w-full justify-between"
                        >
                          <span className="flex items-center gap-2">
                            <Icon name="MessageCircle" size={16} />
                            Комментарии ({article.comments.length})
                          </span>
                          <Icon
                            name={expandedArticle === article.id ? 'ChevronUp' : 'ChevronDown'}
                            size={16}
                          />
                        </Button>

                        {expandedArticle === article.id && (
                          <div className="mt-4 space-y-4 animate-slide-up">
                            {article.comments.map((comment) => (
                              <div key={comment.id} className="bg-muted/30 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="font-medium text-sm">{comment.author}</span>
                                  <span className="text-xs text-muted-foreground">{comment.date}</span>
                                </div>
                                <p className="text-sm text-foreground/90">{comment.content}</p>
                              </div>
                            ))}

                            <div className="space-y-2">
                              <Textarea
                                placeholder="Добавьте комментарий..."
                                value={newComment[article.id] || ''}
                                onChange={(e) => setNewComment({ ...newComment, [article.id]: e.target.value })}
                                className="resize-none"
                                rows={3}
                              />
                              <Button
                                size="sm"
                                onClick={() => handleAddComment(article.id)}
                                disabled={!newComment[article.id]?.trim()}
                              >
                                Отправить
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="space-y-12 animate-fade-in">
            <section className="max-w-4xl mx-auto text-center space-y-4 mb-16">
              <h2 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
                Портфолио проектов
              </h2>
              <p className="text-xl text-muted-foreground font-light">
                Избранные работы, воплощающие креативные идеи в визуальные истории
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              {portfolio.map((project) => (
                <Card key={project.id} className="group overflow-hidden hover-scale border-border/50">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background/90 text-foreground border-0">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-heading font-semibold">Креативный Журнал</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Место для вдохновения, экспериментов и творческого диалога
            </p>
            <div className="flex justify-center gap-6 pt-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;