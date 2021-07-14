import react, {useState, useCallback} from 'react';

export default function Mascara_Telefone_React() {
    const [numero, setNumero] = useState('');
    const handleInputChange = useCallback((e)=>{
        let dig = e.target.value;
        dig = dig.replace(/\D/g,"").replace(/^(\d{2})(\d)/g,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2");
        setNumero(dig)
      },[numero]);

      return (
        <>
            <input 
              type="text"
              value={numero}
              maxLength="15"
              placeholder="Digite número aqui"
              onChange={(e)=>{handleInputChange(e)}}
            />
        </>
    )
}
