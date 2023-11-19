import { db } from "../db.js";

export const getUsuarios = (req, res) => {
    const q = "SELECT * FROM tb_usuarios";

    db.query(q, (error, data) =>{
        if(error) return res.json(error);

        return res.status(200).json(data);
    })
}

export const postUsuarios = (req, res) => {
    const q = "INSERT INTO tb_usuarios(`nome`, `sobrenome`, `email`, `celular`, `senha`) VALUES(?)";

    const values = [
        1,
        req.body.nome,
        req.body.sobrenome,
        req.body.email,
        req.body.celular,
        req.body.senha,
    ]

    console.log(req.body)

    db.query(q, [values], (error) =>{
        if(error) return res.json(error);

        return res.status(200).json("Usuário criado com sucesso!");
    })
}

export const putUsuarios = (req, res) => {
    const q = "UPDATE tb_usuarios SET `nome` = ?, `email` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email
    ]

    db.query(q, [...values, req.params.id], (error) =>{
        if(error) return res.json(error);

        return res.status(200).json("Usuário alterado com sucesso!");
    })
}

export const deleteUsuarios = (req, res) => {
    const q = "DELETE FROM tb_usuarios WHERE `id` = ?";

    db.query(q, [req.params.id], (error) =>{
        if(error) return res.json(error);

        return res.status(200).json("Usuário deletado com sucesso!");
    })
}