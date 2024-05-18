import { useSelector } from "react-redux";


const Header = () => {

  const {isLoading,error,flights} =  useSelector((store) => store.flightReducer)



  return (


    <header>
      <div>
        <img src="/plane-logo.png" />
        <h3>Uçuş Radarı</h3>
      </div>

      <p>
        
        {
        isLoading ?( <p> Uçuşlar Hesaplanıyor </p>)  : error ? (<p className="error">üzgünüz bir hata oluştu : {error}</p>)
          : (<p>{flights.length} Uçuş Bulundu </p> )
        }

      </p>
    </header>
  );
};

export default Header;
