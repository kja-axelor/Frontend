const dns = require('dns');

// host name to ip address
dns.lookup('cricbuzz.com',(error,family,address)=>{
    if(error) throw error;
    console.log(address);
    // ipv4 or ipv6 will store in family
    console.log(family);
})

// resolve
dns.resolve("whatsapp.com","NS",(error,record)=>{
    if (error) throw error;
    console.log(record);
})