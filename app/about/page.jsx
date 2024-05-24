import Card from '../../components/cards';

const page = () => {
  const members = [
    {
      image: '/assets/pessoas_trabalho/Daniely.jpg',
      name: 'Daniely Florentino',
      description: 'I’m 27 years old, born in the capital of Rio Grande do Sul, and currently living in Rio de Janeiro. I work with vehicle sales at Honda and I am studying Marketing at IBMR',
    },
    {
      image: '/assets/pessoas_trabalho/Eloy.jpg',
      name: 'Eloy',
      description: 'Born and raised in São Paulo, currently, Eloy is 21 years old, studies Digital Marketing and works as an E-commerce analyst at Evino.',
    },
    {
      image: '/assets/pessoas_trabalho/Enzo.jpg',
      name: 'Enzo',
      description: "My name is Enzo Pruano, I am 22 years old, and I was born in São Paulo, but I grew up and was educated in São Roque, SP. I began my academic journey in the field of Mechatronics Engineering. However, during the pandemic, my interest in the financial market grew significantly, leading me to change my professional path. I found an opportunity to work in the financial sector and decided to switch my university course to Financial Management, which I am currently pursuing. I am now building my career as an Investment Advisor, applying my knowledge and passion for the financial market to help my clients achieve their financial goals."
    },
    {
      image: '/assets/pessoas_trabalho/Estela Luiza.jpg',
      name: 'Estela Luiza',
      description: "I was born on October 22, 2002, in Belo Horizonte - MG. At the age of 7 I moved to Vila Velha - ES and, after two years living there, I returned to Belo Horizonte. I started my first job at the age of 16 and finished high school at the age of 18. I started my first degree at the age of 18 in my first ENEM at UFMG, a Bachelor's degree in Mathematics, got my category B license, bought my first property and soon after decided to start the Information Systems course at Una, where I am still studying.",
    },
    {
      image: '/assets/pessoas_trabalho/Guilherme Duarte.jpg',
      name: 'Guilherme Martins Duarte',
      description: "Guilherme Martins Duarte, born and raised in Porto Alegre, RS, is a determined 21-year-old focused on achieving success. Since the age of 15, he has been building his career in the same company, starting as a young apprentice and progressing to the position of analyst in the business intelligence area. His journey has been shaped by the inspiring influence of his mother and grandmother, who taught him to be resilient and ambitious. Guilherme is committed to excelling and achieving his goals, always striving for excellence in everything he does.",
    },
    {
      image: '/assets/pessoas_trabalho/Julia pereira.jpg',
      name: 'Juliia Pereira',
      description: "I was born in Nova Lima and raised in Contagem. I started my professional life at the age of 18 as a young apprentice in a logistics company. Currently, at 19, I work in the administration area at a precast company while studying Digital Marketing at Una, Contagem campus. I am determined to pursue this field, I am looking for an internship to apply my knowledge. With focus and passion, I am confident in achieving my goals.",
    },
    {
      image: '/assets/pessoas_trabalho/Julia Vitoriia.jpg',
      name: 'Juliia Vitória',
      description: "I was born in Nova Lima and raised in Contagem. I started my professional life at the age of 18 as a young apprentice in a logistics company. Currently, at 19, I work in the administration area at a precast company while studying Digital Marketing at Una, Contagem campus. I am determined to pursue this field, I am looking for an internship to apply my knowledge. With focus and passion, I am confident in achieving my goals.",
    },
    {
      image: '/assets/pessoas_trabalho/Kayki.jpg',
      name: 'Kayki Soares',
      description: "I'm a 19-year-old from Curitiba, currently working as an administrative assistant and studying Analysis and Systems Development at UniCuritiba. What motivates me to study in my chosen field is my aptitude for problem-solving and my love of digital technology.",
    },
    {
      image: '/assets/pessoas_trabalho/Luiz claudiio.jpg',
      name: 'Luiz Cláudio',
      description: "I am 41 years old, and I was born and raised in Belo Horizonte, MG. I work in logistics at a transport company. I'm studying Logistics at UNA in Contagem, MG.",
    },
    {
      image: '/assets/pessoas_trabalho/Eduarda.jpg',
      name: 'Maria Eduarda Turko Oliveira',
      description: "I am 21 years old and was born in Curitiba, Paraná. I worked in the financial sector for four years and am currently studying Systems Analysis and Development. I am also interning in the IT department at ExxonMobil, where I aim to apply the knowledge I've gained from my studies.",
    },
    {
      image: '/assets/pessoas_trabalho/Miguel Ozana.jpg',
      name: 'Miguel Ozana',
      description: "I was born in Rio de Janeiro, RJ, and I am 19 years old. I used to compete with Alpha Byte in robotics, and I have a strong enthusiasm for technology. Since August 2023, I have been employed at Miceli Sociedade de Advogados as a Python Backend Developer and Web Scraper. In addition, I founded Pypehub, my own startup. My passion for technology and my desire to learn more about it have led me to pursue System Analysis and Development at IBMR starting in 2023. I'm grateful to everyone!",
    },
  ];

  const vai_tomar_no_cu = True;

  return (
    <div className="py-10">
      <div className="wrapper flex flex-col gap-5 justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
          About Us: Group 14
        </h1>
        <div className="flex flex-wrap justify-center gap-5">
          {members.map((member, index) => (
            <Card
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              rating={member.rating}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
