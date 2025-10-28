import fondLogo from '../../assets/images/fondsvg.svg';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>BAD PDF Reader</h5>
            <p className="small">Точное извлечение текста из сложных PDF</p>
            <p className="small"><a href="https://fasie.ru/programs/programma-studstartup/">Проект создан при поддержке Федерального государственного бюджетного учреждения "Фонд содействия развитию малых форм предприятий в научно-технической сфере" в рамках программы "Студенческий стартап" федерального проекта "Платформа университетского технологического предпринимательства</a></p>
            <img 
              src={fondLogo}
              alt="Фонд содействия инновациям" 
              style={{ width: "150px", marginTop: "10px" }} 
            />
          </div>
          <div className="col-md-3">
            <h5>Контакты</h5>
            <ul className="list-unstyled">
              <li>mishazagorodnikov@mail.ru</li>
              <li>+7 (914) 935-06-82</li>
              <li>
                <a 
                  href="https://t.me/mishokmeshok" 
                  className="text-white fs-4"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-telegram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center small">
          <p>© {2025} ООО "Загородников"</p>
        </div>
      </div>
    </footer>
  );
}