

export default function LinkCard({ link, text }) {
    return (
        <div className="text-center">
            <a href={link} className="">
                <i className=""></i> {text}
            </a>
        </div>
    );
}
