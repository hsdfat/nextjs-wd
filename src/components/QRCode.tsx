import Image from 'next/image'
import SingleImageViewer from './ZoomableImage';
const QRCode: React.FC<{ type: string; imgSrc: string; url: string; bank: string; name: string; account: string }> = ({ type, imgSrc, url, bank, name, account }) => {
    console.log(imgSrc)
    return (
        <div className="row d-flex justify-content-around donate-box mb-1 col-6 mb-4 donate-wrap">
            <div className="donate-card p-3 px-3 rounded text-center">
                <strong className="d-block sub-title mb-2 text-uppercase">{type}</strong>
                {/* <Image className="qr-code-image m-auto mb-2" src={imgSrc} alt="QR Code" /> */}
                <div className="flex justify-center items-center min-h-screen bg-gray-100">
                    <SingleImageViewer src={imgSrc} url={url} alt="Wedding Photo" />
                </div>
                <p className="mb-1">Ngân hàng: <strong>{bank}</strong></p>
                <p className="mb-1">Tên tài khoản: <strong>{name}</strong></p>
                <p className="mb-1">Số tài khoản: <strong>{account}</strong></p>
            </div>
        </div>
    );
};


export default QRCode;