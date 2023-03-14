import { sorular, cevaplar } from "./Icerik";
import Sss from "./Sss";

export default function Sorular() {

    return (
        <><div className="row mt-5">
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card-header">
                        Sıkça sorular sorular
                    </div>
                    <div className="card-body">
                        {sorular.map((Q, soru_index) =>
                        (<Sss
                            soru={Q}
                            cevap={cevaplar[soru_index]}
                        />)
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
