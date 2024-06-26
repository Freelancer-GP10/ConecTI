import logobranca from "../assets/logo/logo-branca.png";
import "./css/footer.css";

export function Footer() {
    return (
        <>
            <footer>

                <div className="coluna-logo-footer">
                    <img src={logobranca} alt="" className="logo-grande-footer" />
                    <h2 className="h2-slogan-footer">A química da conexão perfeita!</h2>
                </div>

                <div className="colunas">
                    <div className="coluna-um">
                        <h2 className="h2-18"><b>Comece agora mesmo!</b></h2>
                        <a href="/escolha"><p className="p-14 p-footer">Cadastre-se</p></a>
                        <a href="/cadastro-freelancer"><p className="p-14 p-footer">Freelancer</p></a>
                        <a href="/cadastro-Microempreendedorz"><p className="p-14 p-footer">Microempreendedor</p></a>
                    </div>




                    <div className="coluna-dois">
                        <h2 className="h2-18"><b>Atendimento 24h</b></h2>
                        <div className="alinhamento-inline alinhamento-p">
                            <a className="alinhamento-inline alinhamento-color" href="/contato">
                                <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                    <path d="M18.9999 8.5C18.9999 4.08172 15.4182 0.5 10.9999 0.5C6.58163 0.5 2.99991 4.08172 2.99991 8.5" stroke="#F2F9FA" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1 12.9387V11.0619C1 10.1441 1.62459 9.34418 2.51493 9.12158L4.25448 8.68668C4.63317 8.59198 5 8.87838 5 9.26878V14.7318C5 15.1222 4.63317 15.4086 4.25448 15.3139L2.51493 14.879C1.62459 14.6564 1 13.8565 1 12.9387Z" stroke="#F2F9FA" />
                                    <path d="M21.0001 12.9387V11.0619C21.0001 10.1441 20.3755 9.34418 19.4852 9.12158L17.7456 8.68668C17.3669 8.59198 17.0001 8.87838 17.0001 9.26878V14.7318C17.0001 15.1222 17.3669 15.4086 17.7456 15.3139L19.4852 14.879C20.3755 14.6564 21.0001 13.8565 21.0001 12.9387Z" stroke="#F2F9FA" />
                                    <path d="M19 15.5V16C19 17.1046 18.1046 18 17 18H13.5" stroke="#F2F9FA" />
                                    <path d="M12.5001 19.5H9.50006C8.67163 19.5 8.00006 18.8284 8.00006 18C8.00006 17.1716 8.67163 16.5 9.50006 16.5H12.5001C13.3285 16.5 14.0001 17.1716 14.0001 18C14.0001 18.8284 13.3285 19.5 12.5001 19.5Z" stroke="#F2F9FA" />
                                </svg>

                                <p className="p-12 p-footer-contact">Central de ajuda</p>
                            </a>
                        </div>

                        <div className="alinhamento-inline alinhamento-p">
                            <a className="alinhamento-inline alinhamento-color" href="https://app.slack.com/huddle/T066WM5BQQ7/C067ATBF3HC">
                                <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none">
                                    <path d="M10.0005 1.66699C14.6028 1.66699 18.3338 5.39795 18.3338 10.0003C18.3338 14.6027 14.6028 18.3337 10.0005 18.3337H3.33384C2.41337 18.3337 1.66718 17.5875 1.66718 16.667V10.0003C1.66718 5.39795 5.39813 1.66699 10.0005 1.66699ZM10.0005 11.667H7.50051C7.04028 11.667 6.66718 12.0401 6.66718 12.5003C6.66718 12.9606 7.04028 13.3337 7.50051 13.3337H10.0005C10.4608 13.3337 10.8338 12.9606 10.8338 12.5003C10.8338 12.0401 10.4608 11.667 10.0005 11.667ZM12.5005 8.33366H7.50051C7.04028 8.33366 6.66718 8.70674 6.66718 9.16699C6.66718 9.59437 6.98888 9.94658 7.40333 9.99472L7.50051 10.0003H12.5005C12.9608 10.0003 13.3338 9.62724 13.3338 9.16699C13.3338 8.73962 13.0122 8.3874 12.5977 8.33926L12.5005 8.33366Z" fill="#F2F9FA" />
                                </svg>

                                <p className="p-12 p-footer-contact-t">Comunidade</p>
                            </a>
                        </div>
                    </div>




                    <div className="coluna-tres">

                        <h2 className="h2-18"><b>Nossas redes socias</b></h2>

                        <div className="redes-inline">

                            <a href="https://www.instagram.com/conecti.10/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#f2f9fa" viewBox="0 0 20 22">
                                    <path d="M8,3c-2.761,0 -5,2.239 -5,5v8c0,2.761 2.239,5 5,5h8c2.761,0 5,-2.239 5,-5v-8c0,-2.761 -2.239,-5 -5,-5zM18,5c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,7c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5zM12,9c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"></path>
                                </svg>
                            </a>

                            <a href="https://web.facebook.com/profile.php?id=61553641055822" target="_blank">
                                <svg className="icon-footer-face" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M25 12.5771C25 5.67168 19.4008 0.0771484 12.5 0.0771484C5.59453 0.0771484 0 5.67168 0 12.5771C0 18.8146 4.56953 23.9865 10.5469 24.9232V16.1912H7.37266V12.5779H10.5469V9.82246C10.5469 6.69043 12.4102 4.96074 15.2664 4.96074C16.6344 4.96074 18.0664 5.20449 18.0664 5.20449V8.28027H16.4875C14.9375 8.28027 14.4531 9.24512 14.4531 10.2334V12.5771H17.9195L17.3625 16.1904H14.4531V24.9225C20.4258 23.9857 25 18.8139 25 12.5764V12.5771Z" fill="#F2F9FA" />
                                </svg>
                            </a>

                            <a href="https://twitter.com/conec_TI" target="_blank">
                            <svg className="icon-footer" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#F2F9FA" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                            </svg>
                        </a>

                    </div>

                </div>

            </div>
        </footer >
        </>
    )
}