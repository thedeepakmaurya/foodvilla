import { useState } from "react"

const Section = ({ title, description, isVisible, setIsVisible }) => {

    return (
        <div className="border border-black p-2  m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {
                isVisible ? <button className="cursor-pointer underline" onClick={() => { setIsVisible(false) }}>Hide</button> : <button className="cursor-pointer underline p-2" onClick={() => { setIsVisible(true) }}>Show</button>
            }
            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("about")
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section title={"About instamart"} isVisible={visibleSection === "about"} setIsVisible={() => setVisibleSection("about")} description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."} />
            <Section title={"Team instamart"} isVisible={visibleSection === "team"} setIsVisible={() => setVisibleSection("team")} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."} />
            <Section title={"Career section"} isVisible={visibleSection === "career"} setIsVisible={() => setVisibleSection("career")} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."} />
        </div>
    )
}

export default Instamart;