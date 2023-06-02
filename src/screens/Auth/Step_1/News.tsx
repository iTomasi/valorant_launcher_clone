import { CardNews } from 'components/card'

interface Props {
  className?: string
}

export default function News ({
  className = ''
}: Props) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <CardNews
        imageUrl="/phantom_vs_vandal.jpg"
        tag="dev"
        title="VALORANT Data Drop: Phantom vs. Vandal"
      />

      <CardNews
        imageUrl="/reyna_brimston.jpg"
        tag="game updates"
        title="VALORANT Patch Notes 6.10"
        size="xl"
      />
    </div>
  )
}
