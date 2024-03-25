import "./css/styles.css";

export function StilizationsHome(){
    return (
        <>
        {/* Circulos estilizadores de fundo */}
            <div className="background_circle"></div>
            <div className="background_circle_midle"></div>
            <div className="background_circle_end"></div>

        {/* Quadados estilizadores de Fundo */}

        <div className="background_square">
            <div className="square1"></div>
            <div className="square3"></div>
            <div className="square2"></div>
            <div className="square4"></div>
        </div>

        <div className="background_square_two">
            <div className="square1"></div>
            <div className="square3"></div>
            <div className="square2"></div>
            <div className="square4"></div>
        </div>
        </>
    )
}