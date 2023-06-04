import Description from 'components/Description'

const descriptions = [
  { title: 'Developer', text: 'Riot Games' },
  { title: 'Publisher', text: 'Riot Games' }
]

export default function Bottom () {
  return (
    <div className="flex gap-28 px-20 pb-[450px]">
      <h4 className="text-2xl font-bold">About</h4>
      <p className="text-stone-300 text-lg">
        VALORANT is a free-to-play game of precise skill, high stakes, lethal gameplay, and clutch moments. VALORANT pits two teams of five against each other to win a round-based, attackers vs defenders, best-of-24-rounds gunfight. High-fidelity gameplay and competitive integrity matter most in VALORANT, so Riot Games invested in an unprecedented, best-in-class technical back-end to support the game, including: dedicated 128-tick servers; custom-built netcode; server authoritative game architecture and proprietary anti-cheat prevention.
      </p>
      <div className="flex flex-col gap-4">
        <a className="font-semibold" href="#">playvalorant.com</a>

        {
          descriptions.map(({ title, text }, index) => (
            <Description title={title} key={index}>
              {text}
            </Description>
          ))
        }
      </div>
    </div>
  )
}
