const QRCode = ({type, imgSrc, bank, name, account}) => {
    return (
        // <div className="w-100">

        <div className="row d-flex justify-content-around donate-box mb-1 col-6 mb-4 donate-wrap">
                <div className="donate-card p-3 px-3 rounded text-center">
                    <strong className="d-block sub-title mb-2 text-uppercase">{type}</strong>
                    <img className="qr-code-image m-auto mb-2" src={imgSrc} alt="QR Code" />
                    <p className="mb-1">Ngân hàng: <strong>{bank}</strong></p>
                    <p className="mb-1">Tên tài khoản: <strong>{name}</strong></p>
                    <p className="mb-1">Số tài khoản: <strong>{account}</strong></p>
                </div>
        </div>
        // </div>
    );
};

export default QRCode;