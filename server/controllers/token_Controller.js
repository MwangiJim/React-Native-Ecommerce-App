import axios from "axios";
let token = null;

const createToken =async(req,res,next)=>{//Runs as a midelaware
  const secret = 'cRaGnDkIinFJfHIA';
  const consumer = 'QeyVqWN8CkAoDQsDp4JcrnMGtTpBTfaE';
  const auth = new Buffer.from(`${consumer}:${secret}`).toString('base64');
  await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',{
    headers:{
        authorization:`Basic ${auth}`,
    }
  }).then((data)=>{
    token = data.data.access_token
    console.log(data.data);
    next();
  }).catch((err)=>{
    console.log('Error',err);
  })
}


const  SdkPush = async(req,res)=>{
    const shortCode = 174379//Paybill,Tiil number - obtain from test credantials
    const PhoneNumber = req.body.phone.substring(1);//get rid of the first 0
    const amount = req.body.amount;
    const date = new Date();
  const timestamp =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);
    const passKey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
    const password = new Buffer.from(shortCode+passKey+timestamp).toString('base64');
    const data ={
        BusinessShortCode:shortCode,    
        Password: password,    
      Timestamp:timestamp,    
      TransactionType: "CustomerPayBillOnline",    
        Amount:amount,    
       PartyA:`254${PhoneNumber}`,    
        PartyB:174379,    
      PhoneNumber:`254${PhoneNumber}`,    
      CallBackURL:"https://mydomain.com/path",    
      AccountReference:"Test",    
      TransactionDesc:"Test"
    };

   if(amount<=0){
    res.status(400).json({'message':'Cannot process amount less than 1'})
   }
   else{
      await axios.post(
        url,data,{
            headers:{
                authorization:`Bearer ${token}`,
            }
        }
    ).then((data)=>{
        console.log(data);
        res.status(200).json({'message':data.data})
    })
    .catch((err)=>{
        console.log(err)
        res.status(400).json({'message':err})
    })
   }
}

export {createToken,SdkPush}