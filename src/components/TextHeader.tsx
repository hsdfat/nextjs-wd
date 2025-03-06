import { Open_Sans } from 'next/font/google'
import { Bonheur_Royale } from 'next/font/google'

const bonheurRoyale = Bonheur_Royale({
    weight: '400',
    subsets: ['latin'],
})
//👇 Configure our font object
const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
})

const TextHeader: React.FC<{ content: string }> = ({ content }) => {
    return (
        <p className={bonheurRoyale.className} style={{
            alignSelf: 'center',
            fontSize: '36px',
            lineHeight: '1.5',
        }}>{content}</p>
    );
};

export default TextHeader;