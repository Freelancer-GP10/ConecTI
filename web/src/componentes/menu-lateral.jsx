import "../css/global.css";
import "./css/menu-lateral.css";
import "../css/img.css";
import imgLogo from "../assets/logo/logo-branca.png";
import logOff from "../js/logOf";

export function Menu(){
    return(
        <>
             <div className="menu-lateral">

            <div className="position">               
                <div className="logo-branca-menu">
                <img src={imgLogo} alt="ConcecTI" />
                </div>

                <div className="container-menu">

                <div className="workspace">
                    <a href="/freelancer/workspace">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.5863 17.5863V27.9309H27.9309V17.5863H17.5863ZM17.5863 15.5173V6.552H27.9309V15.5173H17.5863ZM30 15.5173V6.552C30 5.4101 29.0728 4.48295 27.9309 4.48295H17.5863C16.4444 4.48295 15.5173 5.4101 15.5173 6.552V15.5173H4.48295C3.34105 15.5173 2.41389 16.4444 2.41389 17.5863V27.9309C2.41389 29.0728 3.34105 30 4.48295 30H27.9309C29.0728 30 30 29.0728 30 27.9309V17.5863V15.5173ZM15.5173 17.5863H4.48295V27.9309H15.5173V17.5863ZM2.06905 2.06905H12.4137V12.4137H2.06905V2.06905ZM2.06905 0H12.4137C13.5556 0 14.4827 0.927158 14.4827 2.06905V12.4137C14.4827 13.5556 13.5556 14.4827 12.4137 14.4827H2.06905C0.927158 14.4827 0 13.5556 0 12.4137V2.06905C0 0.927158 0.927158 0 2.06905 0Z" fill="url(#paint0_linear_586_576)"/>
                            <defs>
                                <linearGradient id="paint0_linear_586_576" x1="8.36841" y1="8.44737" x2="22.4849" y2="24.0696" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BAD6ED"/>
                                    <stop offset="0.838884" stopColor="#50FAAB" stopOpacity="0.5"/>
                                </linearGradient>
                            </defs>
                    </svg>

                    <p className="p-menu">Workspace</p>
                    </a>
                </div>

                <div className="service">
                    <a href="/freelancer/service">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30" fill="none">
                        <path d="M15.0006 29.4001C7.05996 29.4001 0.600586 22.9407 0.600586 15.0001C0.600586 7.05947 7.05996 0.600098 15.0006 0.600098C22.9412 0.600098 29.4006 7.05947 29.4006 15.0001C29.4006 22.9407 22.9412 29.4001 15.0006 29.4001ZM14.424 28.7129C14.6153 28.7213 14.8075 28.7251 15.0006 28.7251C19.4453 28.7251 23.4034 26.6017 25.9131 23.3157V11.2576H26.589V22.3492C27.9409 20.2229 28.7256 17.702 28.7256 15.0001C28.7256 13.126 28.3487 11.3401 27.6662 9.71166L17.2159 3.67885L17.5534 3.09385L27.1618 8.64104C25.1237 4.75885 21.2809 1.96697 16.7547 1.38666L6.3034 7.42135L5.9659 6.83635L15.5771 1.28729C15.3868 1.27885 15.1937 1.2751 15.0006 1.2751C10.5559 1.2751 6.59777 3.39947 4.08809 6.68541V18.7435H3.41309V7.65104C2.06027 9.77729 1.27559 12.2992 1.27559 15.0001C1.27559 16.8732 1.65246 18.6592 2.33496 20.2885L12.7853 26.3223L12.4478 26.9063L2.83934 21.3582C4.87746 25.2413 8.72027 28.0332 13.2465 28.6135L23.6978 22.5788L24.0343 23.1629L14.424 28.7129ZM10.0065 20.3213C9.24152 20.3213 8.49621 19.9248 8.08652 19.2151C7.79215 18.7051 7.71434 18.1098 7.86809 17.5379C8.02184 16.9651 8.38652 16.4879 8.89652 16.1935L14.0387 13.2245C14.1071 11.8435 14.8759 10.576 16.0787 9.88229C17.695 8.94947 19.735 9.22697 21.039 10.5582C21.1121 10.6332 21.1468 10.7363 21.1328 10.8404C21.1187 10.9435 21.0578 11.0354 20.9668 11.087L17.8225 12.9029C17.5356 13.0679 17.4381 13.4363 17.6031 13.7232C17.77 14.0092 18.1375 14.1095 18.4234 13.9426L21.5678 12.1267C21.6568 12.0742 21.7684 12.0676 21.8631 12.106C21.9606 12.1454 22.0328 12.227 22.0609 12.3282C22.5615 14.1245 21.7825 16.0295 20.1662 16.9623C18.9662 17.657 17.484 17.6879 16.2512 17.0588L11.11 20.027C10.7621 20.2257 10.3815 20.3213 10.0065 20.3213ZM18.1225 10.0079C17.5384 10.0079 16.9487 10.1579 16.4153 10.4663C15.3634 11.0738 14.71 12.2063 14.7081 13.4223C14.7081 13.5423 14.6443 13.6538 14.5393 13.7138L9.23402 16.7776C8.88059 16.982 8.62652 17.3138 8.51965 17.7113C8.41277 18.1098 8.46621 18.5232 8.67059 18.8776C9.09527 19.6117 10.0384 19.8648 10.7715 19.441L16.0778 16.3773C16.1818 16.3173 16.3103 16.3173 16.4143 16.3773C17.4681 16.9838 18.7768 16.9829 19.8287 16.3763C21.0484 15.6723 21.6971 14.3054 21.5021 12.9413L18.759 14.5248C18.1515 14.8763 17.3696 14.6663 17.0181 14.0579C16.6665 13.4485 16.8765 12.6676 17.485 12.316L20.2271 10.7326C19.6178 10.2563 18.8734 10.0079 18.1225 10.0079Z" fill="url(#paint0_linear_586_580)"/>
                            <defs>
                                <linearGradient id="paint0_linear_586_580" x1="0.527087" y1="0.526405" x2="29.4745" y2="29.4738" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#B5B4B4"/>
                                    <stop offset="1" stopColor="#50FAAB"/>
                                </linearGradient>
                            </defs>
                    </svg>

                    <p className="p-menu">Service</p>
                    </a>
                </div>

                {/* <div className="pay">
                <a href="/freelancer/pay">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 30 30" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 27C16.9706 27 21 22.9706 21 18C21 13.0294 16.9706 9 12 9C7.02945 9 3 13.0294 3 18C3 22.9706 7.02945 27 12 27ZM12 30C18.6275 30 24 24.6275 24 18C24 11.3726 18.6275 6 12 6C5.37255 6 0 11.3726 0 18C0 24.6275 5.37255 30 12 30Z" fill="url(#paint0_linear_586_585)"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M23.9783 18.7276C25.8321 17.0791 27 14.6759 27 12C27 7.02945 22.9706 3 18 3C15.324 3 12.9209 4.16786 11.2723 6.02168C9.77832 6.11107 8.35797 6.47377 7.06055 7.0605C8.94342 2.89699 13.1334 0 18 0C24.6274 0 30 5.37255 30 12C30 16.8666 27.103 21.0565 22.9395 22.9395C23.5263 21.6421 23.889 20.2217 23.9783 18.7276Z" fill="url(#paint1_linear_586_585)"/>
                        <path d="M10.7165 12H13.2835V13.2H15.8504V15.6H10.7165L10.601 15.6096C10.4531 15.6346 10.3192 15.7075 10.2228 15.8154C10.1264 15.9233 10.0736 16.0595 10.0736 16.2C10.0736 16.3406 10.1264 16.4768 10.2228 16.5846C10.3192 16.6925 10.4531 16.7653 10.601 16.7904L10.7165 16.8H13.2835L13.4939 16.806C14.3264 16.8553 15.1057 17.2057 15.6665 17.7829C16.2273 18.3602 16.5257 19.119 16.4983 19.8985C16.4709 20.6779 16.12 21.4168 15.5199 21.9584C14.9197 22.5001 14.1176 22.802 13.2835 22.8V24H10.7165V22.8H8.14958V20.4H13.2835L13.399 20.3904C13.547 20.3654 13.6808 20.2925 13.7772 20.1846C13.8736 20.0767 13.9265 19.9405 13.9265 19.8C13.9265 19.6594 13.8736 19.5232 13.7772 19.4154C13.6808 19.3075 13.547 19.2347 13.399 19.2096L13.2835 19.2H10.7165L10.5061 19.194C9.67358 19.1447 8.89433 18.7943 8.33348 18.2171C7.77271 17.6398 7.47436 16.881 7.50173 16.1015C7.52911 15.3221 7.88003 14.5832 8.4801 14.0417C9.08033 13.4999 9.88238 13.1981 10.7165 13.2V12Z" fill="url(#paint2_linear_586_585)"/>
                        <defs>
                            <linearGradient id="paint0_linear_586_585" x1="12" y1="6" x2="12" y2="30" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#B5B4B4"/>
                                <stop offset="1" stopColor="#50FAAB"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_586_585" x1="18.5303" y1="0" x2="18.5303" y2="22.9395" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#B5B4B4"/>
                                <stop offset="1" stopColor="#50FAAB"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear_586_585" x1="12" y1="12" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#B5B4B4"/>
                                <stop offset="1" stopColor="#50FAAB"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <p className="p-menu">Pay</p>
                    </a>
                </div> */}

                <hr />


                <div className="perfil-menu">
                <a href="/freelancer/perfil">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30" fill="none">
                    <path d="M30 15C30 6.735 23.265 0 15 0C6.735 0 0 6.735 0 15C0 19.35 1.875 23.265 4.845 26.01C4.845 26.025 4.845 26.025 4.83 26.04C4.98 26.19 5.16 26.31 5.31 26.445C5.4 26.52 5.475 26.595 5.565 26.655C5.835 26.88 6.135 27.09 6.42 27.3C6.525 27.375 6.615 27.435 6.72 27.51C7.005 27.705 7.305 27.885 7.62 28.05C7.725 28.11 7.845 28.185 7.95 28.245C8.25 28.41 8.565 28.56 8.895 28.695C9.015 28.755 9.135 28.815 9.255 28.86C9.585 28.995 9.915 29.115 10.245 29.22C10.365 29.265 10.485 29.31 10.605 29.34C10.965 29.445 11.325 29.535 11.685 29.625C11.79 29.655 11.895 29.685 12.015 29.7C12.435 29.79 12.855 29.85 13.29 29.895C13.35 29.895 13.41 29.91 13.47 29.925C13.98 29.97 14.49 30 15 30C15.51 30 16.02 29.97 16.515 29.925C16.575 29.925 16.635 29.91 16.695 29.895C17.13 29.85 17.55 29.79 17.97 29.7C18.075 29.685 18.18 29.64 18.3 29.625C18.66 29.535 19.035 29.46 19.38 29.34C19.5 29.295 19.62 29.25 19.74 29.22C20.07 29.1 20.415 28.995 20.73 28.86C20.85 28.815 20.97 28.755 21.09 28.695C21.405 28.56 21.72 28.41 22.035 28.245C22.155 28.185 22.26 28.11 22.365 28.05C22.665 27.87 22.965 27.705 23.265 27.51C23.37 27.45 23.46 27.375 23.565 27.3C23.865 27.09 24.15 26.88 24.42 26.655C24.51 26.58 24.585 26.505 24.675 26.445C24.84 26.31 25.005 26.175 25.155 26.04C25.155 26.025 25.155 26.025 25.14 26.01C28.125 23.265 30 19.35 30 15ZM22.41 22.455C18.345 19.725 11.685 19.725 7.59 22.455C6.93 22.89 6.39 23.4 5.94 23.955C3.66 21.645 2.25 18.48 2.25 15C2.25 7.965 7.965 2.25 15 2.25C22.035 2.25 27.75 7.965 27.75 15C27.75 18.48 26.34 21.645 24.06 23.955C23.625 23.4 23.07 22.89 22.41 22.455Z" fill="url(#paint0_linear_586_597)"/>
                    <path d="M15 7.39453C11.895 7.39453 9.375 9.91453 9.375 13.0195C9.375 16.0645 11.76 18.5395 14.925 18.6295H15.06H15.165H15.195C18.225 18.5245 20.61 16.0645 20.625 13.0195C20.625 9.91453 18.105 7.39453 15 7.39453Z" fill="url(#paint1_linear_586_597)"/>
                        <defs>
                            <linearGradient id="paint0_linear_586_597" x1="6.19007" y1="2.1122" x2="24.3203" y2="27.9574" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#B5B4B4"/>
                            <stop offset="1" stopColor="#50FAAB" stopOpacity="0.5"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_586_597" x1="11.6963" y1="8.18555" x2="18.483" y2="17.8731" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#B5B4B4"/>
                            <stop offset="1" stopColor="#50FAAB" stopOpacity="0.5"/>
                            </linearGradient>
                        </defs>
                </svg>

                <p className="p-menu">Perfil</p>
                </a>
                </div>

                {/* <div className="dashboard">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 30 30" fill="none">
                    <g clip-path="url(#clip0_1031_312)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H1.875V28.125H30V30H0V0ZM18.75 6.5625C18.75 6.31386 18.8488 6.0754 19.0246 5.89959C19.2004 5.72377 19.4389 5.625 19.6875 5.625H27.1875C27.4361 5.625 27.6746 5.72377 27.8504 5.89959C28.0262 6.0754 28.125 6.31386 28.125 6.5625V14.0625C28.125 14.3111 28.0262 14.5496 27.8504 14.7254C27.6746 14.9012 27.4361 15 27.1875 15C26.9389 15 26.7004 14.9012 26.5246 14.7254C26.3488 14.5496 26.25 14.3111 26.25 14.0625V9.1875L19.4756 17.4694C19.3927 17.5706 19.2895 17.6533 19.1727 17.7123C19.0558 17.7712 18.9279 17.805 18.7972 17.8116C18.6666 17.8181 18.5359 17.7972 18.4138 17.7502C18.2917 17.7032 18.1807 17.6312 18.0881 17.5388L13.2375 12.6881L6.3825 22.1137C6.23254 22.3044 6.01451 22.4296 5.77422 22.4629C5.53393 22.4961 5.29009 22.435 5.09395 22.2922C4.8978 22.1495 4.76462 21.9363 4.72239 21.6974C4.68017 21.4585 4.73218 21.2126 4.8675 21.0113L12.3675 10.6987C12.4471 10.5891 12.5495 10.498 12.6677 10.4317C12.7859 10.3655 12.9171 10.3256 13.0522 10.3149C13.1873 10.3042 13.3231 10.3229 13.4502 10.3698C13.5774 10.4166 13.6929 10.4905 13.7888 10.5862L18.6806 15.48L25.2094 7.5H19.6875C19.4389 7.5 19.2004 7.40123 19.0246 7.22541C18.8488 7.0496 18.75 6.81114 18.75 6.5625Z" fill="url(#paint0_linear_1031_312)"/>
                    </g>
                        <defs>
                            <linearGradient id="paint0_linear_1031_312" x1="15" y1="0" x2="15" y2="30" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B5B4B4"/>
                            <stop offset="1" stop-color="#50FAAB"/>
                            </linearGradient>
                            <clipPath id="clip0_1031_312">
                            <rect width="30" height="30" fill="white"/>
                            </clipPath>
                        </defs>
                </svg>

                <p className="p-menu">Dashboard</p>
                </div> */}

                <div className="suporte">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 30 30" fill="none">
                    <path d="M11.25 12.1875C11.25 11.1521 10.4104 10.3125 9.375 10.3125H8.4375C6.36621 10.3125 4.6875 11.9912 4.6875 14.0625V16.875C4.6875 18.9463 6.36621 20.625 8.4375 20.625H9.375C10.4104 20.625 11.25 19.7854 11.25 18.75V12.1875ZM21.5625 20.625C23.6338 20.625 25.3125 18.9463 25.3125 16.875V14.0625C25.3125 11.9912 23.6338 10.3125 21.5625 10.3125H20.625C19.5896 10.3125 18.75 11.1521 18.75 12.1875V18.75C18.75 19.7854 19.5896 20.625 20.625 20.625H21.5625ZM15 0C6.63164 0 0.268359 6.9627 0 15V15.9375C0 16.4555 0.419531 16.875 0.9375 16.875H1.875C2.39297 16.875 2.8125 16.4555 2.8125 15.9375V15C2.8125 8.27988 8.27988 2.8125 15 2.8125C21.7201 2.8125 27.1875 8.27988 27.1875 15H27.1805C27.1852 15.1424 27.1875 24.7102 27.1875 24.7102C27.1875 26.0783 26.0783 27.1875 24.7102 27.1875H18.75C18.75 25.6342 17.4908 24.375 15.9375 24.375H14.0625C12.5092 24.375 11.25 25.6342 11.25 27.1875C11.25 28.7408 12.5092 30 14.0625 30H24.7102C27.6316 30 30 27.6316 30 24.7102V15C29.7316 6.9627 23.3684 0 15 0Z" fill="url(#paint0_linear_586_593)"/>
                        <defs>
                            <linearGradient id="paint0_linear_586_593" x1="3.68421" y1="3.1579" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#B5B4B4"/>
                            <stop offset="1" stopColor="#50FAAB" stopOpacity="0.5"/>
                            </linearGradient>
                        </defs>
                </svg>

                <p className="p-menu">Suporte</p>
                </div>

                <div className="logOff" onClick={logOff}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M7.87149 22.4306L1.21865 16.0002L7.8731 9.57135" stroke="url(#paint0_diamond_546_257)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.21924 16.001H21.8369" stroke="url(#paint1_diamond_546_257)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.23486 1L26.4187 1.00475C28.9486 1.00672 30.999 2.92568 31.0004 5.29259V26.7134C31.0004 29.0808 28.9491 31 26.4187 31H9.23486" stroke="url(#paint2_diamond_546_257)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs>
                            <radialGradient id="paint0_diamond_546_257" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.8723 16.001) rotate(-136.906) scale(4.70501 4.69571)">
                            <stop stopColor="#B5B4B4"/>
                            <stop offset="1" stopColor="#50FAAB"/>
                            </radialGradient>
                            <radialGradient id="paint1_diamond_546_257" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.5281 16.501) scale(10.3088 0.5)">
                            <stop stopColor="#B5B4B4"/>
                            <stop offset="1" stopColor="#50FAAB"/>
                            </radialGradient>
                            <radialGradient id="paint2_diamond_546_257" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.1176 16) scale(10.8828 15)">
                            <stop stopColor="#B5B4B4"/>
                            <stop offset="1" stopColor="#50FAAB"/>
                            </radialGradient>
                        </defs>
                </svg>

                <p className="p-menu">Sair</p>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}


//menu do empreendedor
export function Menu2(){
    return(
        <>
             <div className="menu-lateral">

            <div className="position">               
                <div className="logo-branca-menu">
                <img src={imgLogo} alt="ConcecTI" />
                </div>

                <div className="container-menu">

                <div className="workspace">
                    <a href="/microempreendedor/workspace">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.5863 17.5863V27.9309H27.9309V17.5863H17.5863ZM17.5863 15.5173V6.552H27.9309V15.5173H17.5863ZM30 15.5173V6.552C30 5.4101 29.0728 4.48295 27.9309 4.48295H17.5863C16.4444 4.48295 15.5173 5.4101 15.5173 6.552V15.5173H4.48295C3.34105 15.5173 2.41389 16.4444 2.41389 17.5863V27.9309C2.41389 29.0728 3.34105 30 4.48295 30H27.9309C29.0728 30 30 29.0728 30 27.9309V17.5863V15.5173ZM15.5173 17.5863H4.48295V27.9309H15.5173V17.5863ZM2.06905 2.06905H12.4137V12.4137H2.06905V2.06905ZM2.06905 0H12.4137C13.5556 0 14.4827 0.927158 14.4827 2.06905V12.4137C14.4827 13.5556 13.5556 14.4827 12.4137 14.4827H2.06905C0.927158 14.4827 0 13.5556 0 12.4137V2.06905C0 0.927158 0.927158 0 2.06905 0Z" fill="url(#paint0_linear_586_576)"/>
                            <defs>
                                <linearGradient id="paint0_linear_586_576" x1="8.36841" y1="8.44737" x2="22.4849" y2="24.0696" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BAD6ED"/>
                                    <stop offset="0.838884" stopColor="#50FAAB" stopOpacity="0.5"/>
                                </linearGradient>
                            </defs>
                    </svg>

                    <p className="p-menu">Workspace</p>
                    </a>
                </div>

                <div className="service">
                    <a href="/microempreendedor/service">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30" fill="none">
                        <path d="M15.0006 29.4001C7.05996 29.4001 0.600586 22.9407 0.600586 15.0001C0.600586 7.05947 7.05996 0.600098 15.0006 0.600098C22.9412 0.600098 29.4006 7.05947 29.4006 15.0001C29.4006 22.9407 22.9412 29.4001 15.0006 29.4001ZM14.424 28.7129C14.6153 28.7213 14.8075 28.7251 15.0006 28.7251C19.4453 28.7251 23.4034 26.6017 25.9131 23.3157V11.2576H26.589V22.3492C27.9409 20.2229 28.7256 17.702 28.7256 15.0001C28.7256 13.126 28.3487 11.3401 27.6662 9.71166L17.2159 3.67885L17.5534 3.09385L27.1618 8.64104C25.1237 4.75885 21.2809 1.96697 16.7547 1.38666L6.3034 7.42135L5.9659 6.83635L15.5771 1.28729C15.3868 1.27885 15.1937 1.2751 15.0006 1.2751C10.5559 1.2751 6.59777 3.39947 4.08809 6.68541V18.7435H3.41309V7.65104C2.06027 9.77729 1.27559 12.2992 1.27559 15.0001C1.27559 16.8732 1.65246 18.6592 2.33496 20.2885L12.7853 26.3223L12.4478 26.9063L2.83934 21.3582C4.87746 25.2413 8.72027 28.0332 13.2465 28.6135L23.6978 22.5788L24.0343 23.1629L14.424 28.7129ZM10.0065 20.3213C9.24152 20.3213 8.49621 19.9248 8.08652 19.2151C7.79215 18.7051 7.71434 18.1098 7.86809 17.5379C8.02184 16.9651 8.38652 16.4879 8.89652 16.1935L14.0387 13.2245C14.1071 11.8435 14.8759 10.576 16.0787 9.88229C17.695 8.94947 19.735 9.22697 21.039 10.5582C21.1121 10.6332 21.1468 10.7363 21.1328 10.8404C21.1187 10.9435 21.0578 11.0354 20.9668 11.087L17.8225 12.9029C17.5356 13.0679 17.4381 13.4363 17.6031 13.7232C17.77 14.0092 18.1375 14.1095 18.4234 13.9426L21.5678 12.1267C21.6568 12.0742 21.7684 12.0676 21.8631 12.106C21.9606 12.1454 22.0328 12.227 22.0609 12.3282C22.5615 14.1245 21.7825 16.0295 20.1662 16.9623C18.9662 17.657 17.484 17.6879 16.2512 17.0588L11.11 20.027C10.7621 20.2257 10.3815 20.3213 10.0065 20.3213ZM18.1225 10.0079C17.5384 10.0079 16.9487 10.1579 16.4153 10.4663C15.3634 11.0738 14.71 12.2063 14.7081 13.4223C14.7081 13.5423 14.6443 13.6538 14.5393 13.7138L9.23402 16.7776C8.88059 16.982 8.62652 17.3138 8.51965 17.7113C8.41277 18.1098 8.46621 18.5232 8.67059 18.8776C9.09527 19.6117 10.0384 19.8648 10.7715 19.441L16.0778 16.3773C16.1818 16.3173 16.3103 16.3173 16.4143 16.3773C17.4681 16.9838 18.7768 16.9829 19.8287 16.3763C21.0484 15.6723 21.6971 14.3054 21.5021 12.9413L18.759 14.5248C18.1515 14.8763 17.3696 14.6663 17.0181 14.0579C16.6665 13.4485 16.8765 12.6676 17.485 12.316L20.2271 10.7326C19.6178 10.2563 18.8734 10.0079 18.1225 10.0079Z" fill="url(#paint0_linear_586_580)"/>
                            <defs>
                                <linearGradient id="paint0_linear_586_580" x1="0.527087" y1="0.526405" x2="29.4745" y2="29.4738" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#B5B4B4"/>
                                    <stop offset="1" stopColor="#50FAAB"/>
                                </linearGradient>
                            </defs>
                    </svg>

                    <p className="p-menu">Service</p>
                    </a>
                </div>

                {/* <div className="pay">
                <a href="/microempreendedor/pay">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 30 30" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 27C16.9706 27 21 22.9706 21 18C21 13.0294 16.9706 9 12 9C7.02945 9 3 13.0294 3 18C3 22.9706 7.02945 27 12 27ZM12 30C18.6275 30 24 24.6275 24 18C24 11.3726 18.6275 6 12 6C5.37255 6 0 11.3726 0 18C0 24.6275 5.37255 30 12 30Z" fill="url(#paint0_linear_586_585)"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M23.9783 18.7276C25.8321 17.0791 27 14.6759 27 12C27 7.02945 22.9706 3 18 3C15.324 3 12.9209 4.16786 11.2723 6.02168C9.77832 6.11107 8.35797 6.47377 7.06055 7.0605C8.94342 2.89699 13.1334 0 18 0C24.6274 0 30 5.37255 30 12C30 16.8666 27.103 21.0565 22.9395 22.9395C23.5263 21.6421 23.889 20.2217 23.9783 18.7276Z" fill="url(#paint1_linear_586_585)"/>
                        <path d="M10.7165 12H13.2835V13.2H15.8504V15.6H10.7165L10.601 15.6096C10.4531 15.6346 10.3192 15.7075 10.2228 15.8154C10.1264 15.9233 10.0736 16.0595 10.0736 16.2C10.0736 16.3406 10.1264 16.4768 10.2228 16.5846C10.3192 16.6925 10.4531 16.7653 10.601 16.7904L10.7165 16.8H13.2835L13.4939 16.806C14.3264 16.8553 15.1057 17.2057 15.6665 17.7829C16.2273 18.3602 16.5257 19.119 16.4983 19.8985C16.4709 20.6779 16.12 21.4168 15.5199 21.9584C14.9197 22.5001 14.1176 22.802 13.2835 22.8V24H10.7165V22.8H8.14958V20.4H13.2835L13.399 20.3904C13.547 20.3654 13.6808 20.2925 13.7772 20.1846C13.8736 20.0767 13.9265 19.9405 13.9265 19.8C13.9265 19.6594 13.8736 19.5232 13.7772 19.4154C13.6808 19.3075 13.547 19.2347 13.399 19.2096L13.2835 19.2H10.7165L10.5061 19.194C9.67358 19.1447 8.89433 18.7943 8.33348 18.2171C7.77271 17.6398 7.47436 16.881 7.50173 16.1015C7.52911 15.3221 7.88003 14.5832 8.4801 14.0417C9.08033 13.4999 9.88238 13.1981 10.7165 13.2V12Z" fill="url(#paint2_linear_586_585)"/>
                        <defs>
                            <linearGradient id="paint0_linear_586_585" x1="12" y1="6" x2="12" y2="30" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#B5B4B4"/>
                                <stop offset="1" stopColor="#50FAAB"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_586_585" x1="18.5303" y1="0" x2="18.5303" y2="22.9395" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#B5B4B4"/>
                                <stop offset="1" stopColor="#50FAAB"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear_586_585" x1="12" y1="12" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#B5B4B4"/>
                                <stop offset="1" stopColor="#50FAAB"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <p className="p-menu">Pay</p>
                    </a>
                </div> */}

                <hr />


                <div className="perfil-menu">
                <a href="/microempreendedor/perfil">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30" fill="none">
                    <path d="M30 15C30 6.735 23.265 0 15 0C6.735 0 0 6.735 0 15C0 19.35 1.875 23.265 4.845 26.01C4.845 26.025 4.845 26.025 4.83 26.04C4.98 26.19 5.16 26.31 5.31 26.445C5.4 26.52 5.475 26.595 5.565 26.655C5.835 26.88 6.135 27.09 6.42 27.3C6.525 27.375 6.615 27.435 6.72 27.51C7.005 27.705 7.305 27.885 7.62 28.05C7.725 28.11 7.845 28.185 7.95 28.245C8.25 28.41 8.565 28.56 8.895 28.695C9.015 28.755 9.135 28.815 9.255 28.86C9.585 28.995 9.915 29.115 10.245 29.22C10.365 29.265 10.485 29.31 10.605 29.34C10.965 29.445 11.325 29.535 11.685 29.625C11.79 29.655 11.895 29.685 12.015 29.7C12.435 29.79 12.855 29.85 13.29 29.895C13.35 29.895 13.41 29.91 13.47 29.925C13.98 29.97 14.49 30 15 30C15.51 30 16.02 29.97 16.515 29.925C16.575 29.925 16.635 29.91 16.695 29.895C17.13 29.85 17.55 29.79 17.97 29.7C18.075 29.685 18.18 29.64 18.3 29.625C18.66 29.535 19.035 29.46 19.38 29.34C19.5 29.295 19.62 29.25 19.74 29.22C20.07 29.1 20.415 28.995 20.73 28.86C20.85 28.815 20.97 28.755 21.09 28.695C21.405 28.56 21.72 28.41 22.035 28.245C22.155 28.185 22.26 28.11 22.365 28.05C22.665 27.87 22.965 27.705 23.265 27.51C23.37 27.45 23.46 27.375 23.565 27.3C23.865 27.09 24.15 26.88 24.42 26.655C24.51 26.58 24.585 26.505 24.675 26.445C24.84 26.31 25.005 26.175 25.155 26.04C25.155 26.025 25.155 26.025 25.14 26.01C28.125 23.265 30 19.35 30 15ZM22.41 22.455C18.345 19.725 11.685 19.725 7.59 22.455C6.93 22.89 6.39 23.4 5.94 23.955C3.66 21.645 2.25 18.48 2.25 15C2.25 7.965 7.965 2.25 15 2.25C22.035 2.25 27.75 7.965 27.75 15C27.75 18.48 26.34 21.645 24.06 23.955C23.625 23.4 23.07 22.89 22.41 22.455Z" fill="url(#paint0_linear_586_597)"/>
                    <path d="M15 7.39453C11.895 7.39453 9.375 9.91453 9.375 13.0195C9.375 16.0645 11.76 18.5395 14.925 18.6295H15.06H15.165H15.195C18.225 18.5245 20.61 16.0645 20.625 13.0195C20.625 9.91453 18.105 7.39453 15 7.39453Z" fill="url(#paint1_linear_586_597)"/>
                        <defs>
                            <linearGradient id="paint0_linear_586_597" x1="6.19007" y1="2.1122" x2="24.3203" y2="27.9574" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#B5B4B4"/>
                            <stop offset="1" stopColor="#50FAAB" stopOpacity="0.5"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_586_597" x1="11.6963" y1="8.18555" x2="18.483" y2="17.8731" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#B5B4B4"/>
                            <stop offset="1" stopColor="#50FAAB" stopOpacity="0.5"/>
                            </linearGradient>
                        </defs>
                </svg>

                <p className="p-menu">Perfil</p>
                </a>
                </div>

                {/* <div className="dashboard">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 30 30" fill="none">
                    <g clip-path="url(#clip0_1031_312)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H1.875V28.125H30V30H0V0ZM18.75 6.5625C18.75 6.31386 18.8488 6.0754 19.0246 5.89959C19.2004 5.72377 19.4389 5.625 19.6875 5.625H27.1875C27.4361 5.625 27.6746 5.72377 27.8504 5.89959C28.0262 6.0754 28.125 6.31386 28.125 6.5625V14.0625C28.125 14.3111 28.0262 14.5496 27.8504 14.7254C27.6746 14.9012 27.4361 15 27.1875 15C26.9389 15 26.7004 14.9012 26.5246 14.7254C26.3488 14.5496 26.25 14.3111 26.25 14.0625V9.1875L19.4756 17.4694C19.3927 17.5706 19.2895 17.6533 19.1727 17.7123C19.0558 17.7712 18.9279 17.805 18.7972 17.8116C18.6666 17.8181 18.5359 17.7972 18.4138 17.7502C18.2917 17.7032 18.1807 17.6312 18.0881 17.5388L13.2375 12.6881L6.3825 22.1137C6.23254 22.3044 6.01451 22.4296 5.77422 22.4629C5.53393 22.4961 5.29009 22.435 5.09395 22.2922C4.8978 22.1495 4.76462 21.9363 4.72239 21.6974C4.68017 21.4585 4.73218 21.2126 4.8675 21.0113L12.3675 10.6987C12.4471 10.5891 12.5495 10.498 12.6677 10.4317C12.7859 10.3655 12.9171 10.3256 13.0522 10.3149C13.1873 10.3042 13.3231 10.3229 13.4502 10.3698C13.5774 10.4166 13.6929 10.4905 13.7888 10.5862L18.6806 15.48L25.2094 7.5H19.6875C19.4389 7.5 19.2004 7.40123 19.0246 7.22541C18.8488 7.0496 18.75 6.81114 18.75 6.5625Z" fill="url(#paint0_linear_1031_312)"/>
                    </g>
                        <defs>
                            <linearGradient id="paint0_linear_1031_312" x1="15" y1="0" x2="15" y2="30" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B5B4B4"/>
                            <stop offset="1" stop-color="#50FAAB"/>
                            </linearGradient>
                            <clipPath id="clip0_1031_312">
                            <rect width="30" height="30" fill="white"/>
                            </clipPath>
                        </defs>
                </svg>

                <p className="p-menu">Dashboard</p>
                </div> */}

                <div className="suporte">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 30 30" fill="none">
                    <path d="M11.25 12.1875C11.25 11.1521 10.4104 10.3125 9.375 10.3125H8.4375C6.36621 10.3125 4.6875 11.9912 4.6875 14.0625V16.875C4.6875 18.9463 6.36621 20.625 8.4375 20.625H9.375C10.4104 20.625 11.25 19.7854 11.25 18.75V12.1875ZM21.5625 20.625C23.6338 20.625 25.3125 18.9463 25.3125 16.875V14.0625C25.3125 11.9912 23.6338 10.3125 21.5625 10.3125H20.625C19.5896 10.3125 18.75 11.1521 18.75 12.1875V18.75C18.75 19.7854 19.5896 20.625 20.625 20.625H21.5625ZM15 0C6.63164 0 0.268359 6.9627 0 15V15.9375C0 16.4555 0.419531 16.875 0.9375 16.875H1.875C2.39297 16.875 2.8125 16.4555 2.8125 15.9375V15C2.8125 8.27988 8.27988 2.8125 15 2.8125C21.7201 2.8125 27.1875 8.27988 27.1875 15H27.1805C27.1852 15.1424 27.1875 24.7102 27.1875 24.7102C27.1875 26.0783 26.0783 27.1875 24.7102 27.1875H18.75C18.75 25.6342 17.4908 24.375 15.9375 24.375H14.0625C12.5092 24.375 11.25 25.6342 11.25 27.1875C11.25 28.7408 12.5092 30 14.0625 30H24.7102C27.6316 30 30 27.6316 30 24.7102V15C29.7316 6.9627 23.3684 0 15 0Z" fill="url(#paint0_linear_586_593)"/>
                        <defs>
                            <linearGradient id="paint0_linear_586_593" x1="3.68421" y1="3.1579" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#B5B4B4"/>
                            <stop offset="1" stopColor="#50FAAB" stopOpacity="0.5"/>
                            </linearGradient>
                        </defs>
                </svg>

                <p className="p-menu">Suporte</p>
                </div>

                <div className="logOff" onClick={logOff}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M7.87149 22.4306L1.21865 16.0002L7.8731 9.57135" stroke="url(#paint0_diamond_546_257)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.21924 16.001H21.8369" stroke="url(#paint1_diamond_546_257)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.23486 1L26.4187 1.00475C28.9486 1.00672 30.999 2.92568 31.0004 5.29259V26.7134C31.0004 29.0808 28.9491 31 26.4187 31H9.23486" stroke="url(#paint2_diamond_546_257)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs>
                            <radialGradient id="paint0_diamond_546_257" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.8723 16.001) rotate(-136.906) scale(4.70501 4.69571)">
                            <stop stopColor="#B5B4B4"/>
                            <stop offset="1" stopColor="#50FAAB"/>
                            </radialGradient>
                            <radialGradient id="paint1_diamond_546_257" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.5281 16.501) scale(10.3088 0.5)">
                            <stop stopColor="#B5B4B4"/>
                            <stop offset="1" stopColor="#50FAAB"/>
                            </radialGradient>
                            <radialGradient id="paint2_diamond_546_257" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.1176 16) scale(10.8828 15)">
                            <stop stopColor="#B5B4B4"/>
                            <stop offset="1" stopColor="#50FAAB"/>
                            </radialGradient>
                        </defs>
                </svg>

                <p className="p-menu">Sair</p>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}