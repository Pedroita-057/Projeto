import './serviços.css'
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import img5 from "../../assets/img5.jpg"
import img6 from "../../assets/img6.jpg"
import img7 from "../../assets/img7.jpg"
import img8 from "../../assets/img8.jpg"
import img9 from "../../assets/img9.jpg"

export default function Serviços() {
    return(
        <>
            <div className='serviços' id="servicos"> 
                 
            <div class="container-fotos">

                 <div class="fotos1">

                       <img src={img1} alt='img1' className='foto1' />
                       
                       <p>DEglade</p>
                       <p>VALOR: R$ 30</p>
                
                 </div>  
                   
                
                 <div class="fotos2">     

                       <img src={img2} alt='img2' className='foto2' />
                       <p>DEglade</p>
                       <p>VALOR: R$ 30</p>
                 </div>  

                 <div class="fotos3">

                       <img src={img3} alt='img3' className='foto3' />
                          <p>DEglade</p>
                          <p>VALOR: R$ 30</p>

                </div>

                  


                <div class="fotos4">

                       <img src={img4} alt='img4' className='foto4' />
                       <p>DEglade</p>
                          <p>VALOR: R$ 30</p>

                 </div>        
                      
                 <div class="fotos5">     

                       <img src={img5} alt='img5' className='foto5' />
                          <p>DEglade</p>
                            <p>VALOR: R$ 30</p>

                </div>        
                    
                <div class="fotos6">    

                       <img src={img6} alt='img6' className='foto6' />
                        <p>DEglade</p>
                          <p>VALOR: R$ 30</p>

                </div>    
                     

                 <div class="fotos7">

                       <img src={img7} alt='img7' className='foto7' />
                        <p>DEglade</p>
                          <p>VALOR: R$ 30</p>

                 </div>     

                 <div class="fotos8">

                       <img src={img8} alt='img5' className='foto8' />
                        <p>DEglade</p>
                          <p>VALOR: R$ 30</p>

                 </div>        

                 <div class="fotos9">      
                    
                       <img src={img9} alt='img6' className='foto9' />
                        <p>DEglade</p>
                          <p>VALOR: R$ 30</p>

                 </div>      
                       
                 <div class="fotos10">      
                    
                       <img src={img9} alt='img6' className='foto9' />
                        <p>DEglade</p>
                          <p>VALOR: R$ 30</p>

                 </div>          

                </div>
           
            </div>
            
        </>
    )
}