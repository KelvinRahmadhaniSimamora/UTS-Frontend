import {useState} from 'react'
function Shop(props){
    const [angka, setAngka] = useState(1);
    const ubahAngka = () => {
        setAngka(angka + 1);
    }
    return(
        <div className="card">
        <div className="card-body">
            <h4 className="card-title">Toko Baju</h4>
            <p className="card-text">Nama Barang : {props.barang}</p>
            <p className="card-text">Total Barang : {angka}</p>
            <button onClick={ubahAngka}>Tambah</button>
        </div>
        </div>
    )
}
export default Shop;