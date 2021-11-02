import React, {useState} from 'react';
import './Login.css';
import Title from './components/title/Title';
import Label from './components/label/Label';
import Input from './components/input/Input';
const Login = () => {
    const [user, setUser]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [passError, setPassError]=useState(false);
    const [isLogin, setIsLogin]=useState(false);

    function handleChange(name, value){
        if(name==='usuario'){
            //variable para almacenar
            setUser(value)
        } else{
            if(value.length < 8){
                setPassError(true);
            }else{
                setPassError(false);
            }
            setPassword(true);
        }
    };
   //console.log('usuario:', user);
   // console.log('password:', password);
   function ifMatch(param){
       if(param.user > 0 && param.password>0){
           if(param.user ==='Daniela' && param.password ==='12345678'){
               let ac={user, password};
               let account =JSON.stringify(ac);
               localStorage.setItem('account', account);
               setIsLogin(true);
           }else{
               setIsLogin(false);
           }
       }else{
        setIsLogin(false);
       }
   }
   function handleEmail(email){
    //email.include('@');  
    for(let i=0; i<email.length; i++){
       if(i='@'){
           setEmail(true)
       }
       else{ setEmail(false)}
    }
    t1=email.indexOf('gmail.com')
    t2=email.indexOf('hotmail.com')
    t3=email.indexOf('yahoo.com')
    if(t1!==-1 || t2!==-1 || t3 !==-1 ){
        setEmail(true)
    }else{ setEmail(false)}
    
};
    function handleSubmit(){
        let account={user,email, password}
        if(account){
            ifMatch(account);
        }
    };
    return (
        <div className="login-container">
       
            <Title/>
            <Label text="USUARIO:"/>
            <Input
            atributo={{
                id:'usuario',
                name:'usuario',
                type:'text',
                placeholder:'Ingrese su usario'
            
            }}
            handleChange={handleChange}
            />
            <Label text="EMAIL:"/>
            <Input
            atributo={{
                id:'email',
                name:'email',
                type:'email',
                placeholder:'ejemplo@gmail.com'
            
            }}
            handleChange={handleEmail}
            />
            
            <Label text="CONTRASEÑA:"/>
            <Input 
            atributo={{
                id:'contraseña',
                name:'contraseña',
                type:'password',
                placeholder:'Ingrese su contraseña'
            }}
            handleChange={handleChange}
            param={passError}
            />
            {passError &&
            <label className="label-error">
                La contraseña debe contener al menos 8 caracteres
            </label>
             }
            <div className="login-button">
                <button onClick={handleSubmit} 
                    >INICIAR SESION
                </button>
            </div>
            
        </div>
    )
};

export default Login;