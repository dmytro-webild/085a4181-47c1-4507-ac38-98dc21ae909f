"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { CalendarCheck, CreditCard, Diamond, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumSizeLargeTitles"
        background="none"
        cardStyle="layered-gradient"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Услуги",
          id: "services",
        },
        {
          name: "Акции",
          id: "promotions",
        },
        {
          name: "Почему мы",
          id: "why-us",
        },
        {
          name: "Отзывы",
          id: "testimonials",
        },
        {
          name: "Контакты",
          id: "contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/professional-dental-clinic-logo-template-tooth-alignment_1017-45248.jpg"
      logoAlt="IsmailovStom Logo"
      brandName="IsmailovStom"
      button={{
        text: "Записаться",
        href: "https://wa.me/77089780149",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "radial-gradient",
      }}
      title="Красивая улыбка без переплат — имплантация, брекеты, виниры"
      description="Рейтинг 5.0 из 5 • Бесплатная консультация • Алматы, Маметовой 36"
      buttons={[
        {
          text: "Записаться в WhatsApp",
          href: "https://wa.me/77089780149",
        },
        {
          text: "Позвонить",
          href: "tel:+77089780149",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-patient-redviolet-dress-laying-dental-chair-while-female-dentist-treating-her-teeth-with-special-instruments_627829-9769.jpg",
          imageAlt: "Современный интерьер стоматологической клиники",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/playful-asian-woman_1098-22085.jpg",
          imageAlt: "Счастливая женщина с идеальной улыбкой",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/happy-pretty-woman-resting-bed-upside-down_1262-6114.jpg",
          imageAlt: "Стоматолог проводит осмотр пациента",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/orthodontist-with-latex-gloves-handling-dental-equipment_23-2148985835.jpg",
          imageAlt: "Высокотехнологичное стоматологическое оборудование",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/dentists-smiling-posing-dental-clinic_107420-65533.jpg",
          imageAlt: "Команда стоматологов IsmailovStom",
        },
      ]}
      mediaAnimation="opacity"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          tag: "Забота о здоровье",
          title: "Лечение и удаление зубов",
          subtitle: "Безболезненное и эффективное решение",
          description: "От кариеса до сложных удалений — мы заботимся о вашем комфорте.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-representation-dental-health-hygiene_23-2150473212.jpg",
          imageAlt: "Иконка лечения зубов",
        },
        {
          tag: "Восстановление",
          title: "Имплантация",
          subtitle: "Южно-Корейские импланты Dentium",
          description: "Восстановите утраченные зубы с помощью надежных имплантов от ведущих мировых производителей.",
          imageSrc: "http://img.b2bpic.net/free-vector/flat-infographic-template-dental-clinic-business_23-2149575896.jpg",
          imageAlt: "Иконка зубного импланта",
        },
        {
          tag: "Идеальный прикус",
          title: "Брекеты, пластинки, элайнеры",
          subtitle: "Исправление прикуса для всех возрастов",
          description: "Широкий выбор ортодонтических систем для красивой и ровной улыбки.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-portrait-with-bright-blue-lips_23-2151096459.jpg",
          imageAlt: "Иконка брекетов",
        },
        {
          tag: "Эстетика и функция",
          title: "Протезирование и ортопедия",
          subtitle: "Восстановление зубов любой сложности",
          description: "Современные методы протезирования для полного восстановления функциональности и эстетики.",
          imageSrc: "http://img.b2bpic.net/free-photo/nurse-attending-patient-hospital-room_23-2151963979.jpg",
          imageAlt: "Иконка зубного протеза",
        },
        {
          tag: "Маленьким пациентам",
          title: "Детская стоматология",
          subtitle: "Без страха и слез",
          description: "Мы создаем комфортную и дружелюбную атмосферу для наших самых маленьких пациентов.",
          imageSrc: "http://img.b2bpic.net/free-photo/little-boy-dentist-chair-children-dental_627829-9375.jpg",
          imageAlt: "Иконка детского стоматолога",
        },
        {
          tag: "Первый шаг",
          title: "Бесплатная первичная консультация",
          subtitle: "Определите план лечения без затрат",
          description: "Начните путь к здоровой улыбке с бесплатной консультации наших специалистов.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-sitting-dentist-s-office_1157-29158.jpg",
          imageAlt: "Иконка бесплатной консультации",
        },
      ]}
      title="Наши услуги"
      description="Мы предлагаем полный спектр стоматологических услуг с использованием передовых технологий и материалов для вашей идеальной улыбки."
    />
  </div>

  <div id="promotions" data-section="promotions">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "promo-1",
          badge: "Скидка -50%",
          price: "75 000 ₸",
          subtitle: "Вместо 150 000 ₸",
          features: [
            "Металлические брекеты",
            "Высокое качество",
            "Быстрый результат",
          ],
          buttons: [
            {
              text: "Записаться",
              href: "https://wa.me/77089780149",
            },
          ],
        },
        {
          id: "promo-2",
          badge: "Скидка -30%",
          price: "350 000 ₸",
          subtitle: "Вместо 500 000 ₸",
          features: [
            "American Orthodontist",
            "Комфорт и эстетика",
            "Премиум материалы",
          ],
          buttons: [
            {
              text: "Записаться",
              href: "https://wa.me/77089780149",
            },
          ],
        },
        {
          id: "promo-3",
          badge: "Скидка -30%",
          price: "420 000 ₸",
          subtitle: "Вместо 600 000 ₸",
          features: [
            "Брекеты Dentium Q2 (США)",
            "Инновационная система",
            "Максимальная эффективность",
          ],
          buttons: [
            {
              text: "Записаться",
              href: "https://wa.me/77089780149",
            },
          ],
        },
        {
          id: "promo-4",
          badge: "Скидка -50%",
          price: "90 000 ₸",
          subtitle: "Вместо 180 000 ₸",
          features: [
            "Импланты Dentium (Южная Корея)",
            "Гарантия качества",
            "Долговечность и надежность",
          ],
          buttons: [
            {
              text: "Записаться",
              href: "https://wa.me/77089780149",
            },
          ],
        },
      ]}
      title="Акции и специальные предложения"
      description="Воспользуйтесь нашими выгодными предложениями, чтобы получить красивую улыбку без переплат!"
    />
  </div>

  <div id="why-us" data-section="why-us">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "metric-1",
          value: "5.0/5",
          title: "Рейтинг на 2GIS",
          description: "122+ положительных отзыва от довольных пациентов.",
          icon: Star,
        },
        {
          id: "metric-2",
          value: "Бесплатно",
          title: "Первичная консультация",
          description: "Мы предлагаем бесплатную первичную консультацию для всех новых пациентов.",
          icon: CalendarCheck,
        },
        {
          id: "metric-3",
          value: "Премиум",
          title: "Материалы",
          description: "Используем только проверенные американские и корейские материалы.",
          icon: Diamond,
        },
        {
          id: "metric-4",
          value: "Удобно",
          title: "Способы оплаты",
          description: "Принимаем оплату картой, QR и наличными для вашего удобства.",
          icon: CreditCard,
        },
      ]}
      title="Почему выбирают IsmailovStom"
      description="Мы гордимся высоким уровнем обслуживания и доверием наших пациентов, что подтверждено годами успешной практики."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Алина С.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-blonde-woman-sits-cafe_273609-2534.jpg",
          imageAlt: "Отзыв Алины С.",
        },
        {
          id: "2",
          name: "Данияр К.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-senior-entrepreneur_1098-15359.jpg",
          imageAlt: "Отзыв Данияра К.",
        },
        {
          id: "3",
          name: "Елена М.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-elderly-woman-with-white-shirt_1098-3484.jpg",
          imageAlt: "Отзыв Елены М.",
        },
        {
          id: "4",
          name: "Тимур Б.",
          imageSrc: "http://img.b2bpic.net/free-photo/cute-curly-haired-young-woman-raises-hands-exclaims-loudly-wears-leather-jacket-spectacles-kerchief-around-neck-feels-very-emotionally-isolated-pink-background-shakes-palms-shows-emotions_273609-57162.jpg",
          imageAlt: "Отзыв Тимура Б.",
        },
        {
          id: "5",
          name: "Гульмира Х.",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-woman-gesturing-ok_23-2147767531.jpg",
          imageAlt: "Отзыв Гульмиры Х.",
        },
      ]}
      cardTitle="Что говорят наши пациенты"
      cardTag="Высшая оценка"
      cardTagIcon={Star}
      cardAnimation="slide-up"
    />
  </div>

  <div id="cta-banner" data-section="cta-banner">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Не откладывайте заботу о себе"
      title="Запишитесь прямо сейчас и получите бесплатную консультацию!"
      description="Наша команда ждет вас, чтобы помочь обрести идеальную и здоровую улыбку мирового уровня."
      buttons={[
        {
          text: "Записаться в WhatsApp",
          href: "https://wa.me/77089780149",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Контакты IsmailovStom"
      description={[
        "Адрес: г. Алматы, ул. Маметовой, 36, 1 этаж",
        "Телефон: +7 708 978 01 49",
        "Режим работы: пн–сб, 9:00–18:00",
        "Найдите нас на карте: [Ссылка на 2GIS/Google Maps]",
        "Приезжайте к нам для бесплатной консультации!",
      ]}
      buttons={[
        {
          text: "Показать на карте",
          href: "http://img.b2bpic.net/free-photo/west-end-london-map-with-pin_23-2148232425.jpg",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Услуги",
          items: [
            {
              label: "Имплантация",
              href: "#services",
            },
            {
              label: "Брекеты",
              href: "#services",
            },
            {
              label: "Протезирование",
              href: "#services",
            },
            {
              label: "Детская стоматология",
              href: "#services",
            },
          ],
        },
        {
          title: "Компания",
          items: [
            {
              label: "Об акциях",
              href: "#promotions",
            },
            {
              label: "Почему мы",
              href: "#why-us",
            },
            {
              label: "Отзывы",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Контакты",
          items: [
            {
              label: "Адрес",
              href: "#contact",
            },
            {
              label: "Телефон",
              href: "tel:+77089780149",
            },
            {
              label: "WhatsApp",
              href: "https://wa.me/77089780149",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 IsmailovStom. Все права защищены."
      bottomRightText="г. Алматы, ул. Маметовой, 36"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
