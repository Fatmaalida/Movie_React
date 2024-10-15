
export default function InputTextCard({  placeholder, value, onChange }) {
    return (
       
            <input 
                type="text" 
                className="sign__input" 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
            />
        
    );
}




