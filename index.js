import react, {useState, useCallback, useEffect} from 'react';

export default function Mascara_Telefone_React() {
    const [numero, setNumero] = useState('');
    const handleInputChange = useCallback((e)=>{
        let dig = e.target.value;
        
        dig = dig.replace(/\D/g,"");                   //Remove tudo o que não é dígito
        dig = dig.replace(/^(\d{2})(\d)/g,"($1) $2");  //Coloca parênteses em volta dos dois primeiros dígitos
        dig = dig.replace(/(\d)(\d{4})$/,"$1-$2");     //Coloca hífen entre o quarto e o quinto dígitos
    
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