export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <div className={props.keyboard}>
            {alfabeto.map((s) => <button /* onClick={props.select} */ key={s} disabled={props.disabled}>{s}</button>)}
        </div>        
    )
}