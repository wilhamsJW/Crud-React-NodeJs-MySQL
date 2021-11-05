import React, { useState } from "react";
import './style.css';
import FormDialog from "../componentes/dialog/dialog"

export default function Card(props) {
    const [open, setOpen] = useState(false);
    const handleClickCard = () => {
        setOpen(true);
    }

    return (
        <>
            <FormDialog
                open={open}
                setOpen={setOpen}
                price={props.price}
                category={props.category}
                listCard={props.listCard}
                setListCard={props.setListCard}
                id={props.id}
            />
            <div className="card--container" onClick={() => {
                handleClickCard()
            }}>
                <h1 className="card--title">Nome:&nbsp;{props.name}</h1>
                <p className="card--price">R$&nbsp;{props.price}</p>
                <p className="card--category">Categoria:&nbsp;{props.category}</p>
            </div>
        </>
    );
}
