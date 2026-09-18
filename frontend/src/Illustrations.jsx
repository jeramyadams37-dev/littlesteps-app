// Simple flat-style SVG illustrations, one per workshop.
// Each is a small functional component returning an <svg>.

function Ball() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#FFF0F0"/>
      <circle cx="150" cy="100" r="55" fill="#FF6B6B"/>
      <path d="M 100 100 Q 150 70 200 100" stroke="white" strokeWidth="6" fill="none"/>
      <path d="M 100 100 Q 150 130 200 100" stroke="white" strokeWidth="6" fill="none"/>
    </svg>
  );
}
function Dog() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#FFF7E8"/>
      <ellipse cx="150" cy="120" rx="60" ry="40" fill="#D9A066"/>
      <circle cx="110" cy="90" r="30" fill="#D9A066"/>
      <ellipse cx="95" cy="70" rx="10" ry="18" fill="#B97F4B" transform="rotate(-20 95 70)"/>
      <ellipse cx="130" cy="70" rx="10" ry="18" fill="#B97F4B" transform="rotate(20 130 70)"/>
      <circle cx="102" cy="88" r="4" fill="#333"/>
      <circle cx="120" cy="88" r="4" fill="#333"/>
      <circle cx="108" cy="100" r="6" fill="#333"/>
    </svg>
  );
}
function RhymeCatHat() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#F3F0FF"/>
      <circle cx="100" cy="120" r="35" fill="#F4A9A8"/>
      <path d="M75 95 L85 65 L100 90 Z" fill="#F4A9A8"/>
      <path d="M125 95 L115 65 L100 90 Z" fill="#F4A9A8"/>
      <circle cx="90" cy="118" r="4" fill="#333"/>
      <circle cx="108" cy="118" r="4" fill="#333"/>
      <path d="M200 130 L240 130 L220 90 Z" fill="#4ECDC4"/>
      <rect x="195" y="128" width="50" height="12" rx="4" fill="#3AA79E"/>
    </svg>
  );
}
function SightWordsBook() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#FFF0F0"/>
      <path d="M60 60 H150 V150 H60 Z" fill="#FF6B6B"/>
      <path d="M240 60 H150 V150 H240 Z" fill="#FF8F8F"/>
      <line x1="150" y1="60" x2="150" y2="150" stroke="#C94B4B" strokeWidth="3"/>
      <text x="150" y="105" textAnchor="middle" fontSize="24" fill="white" fontWeight="bold">the</text>
    </svg>
  );
}
function StoryTime() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#FFF0F0"/>
      <circle cx="150" cy="90" r="40" fill="#FF6B6B"/>
      <rect x="110" y="140" width="80" height="10" rx="5" fill="#C94B4B"/>
      <rect x="120" y="158" width="60" height="8" rx="4" fill="#E9A0A0"/>
    </svg>
  );
}
function BlendingLetters() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#FFF0F0"/>
      <rect x="50" y="80" width="50" height="50" rx="8" fill="#FF6B6B"/>
      <rect x="125" y="80" width="50" height="50" rx="8" fill="#FF8F8F"/>
      <rect x="200" y="80" width="50" height="50" rx="8" fill="#FFB3B3"/>
      <text x="75" y="112" textAnchor="middle" fontSize="26" fill="white" fontWeight="bold">c</text>
      <text x="150" y="112" textAnchor="middle" fontSize="26" fill="white" fontWeight="bold">a</text>
      <text x="225" y="112" textAnchor="middle" fontSize="26" fill="white" fontWeight="bold">t</text>
    </svg>
  );
}
function Ship() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAF7FF"/>
      <rect x="0" y="140" width="300" height="60" fill="#7FC8E8"/>
      <path d="M110 140 L120 90 L180 90 L190 140 Z" fill="#FF6B6B"/>
      <rect x="145" y="60" width="6" height="80" fill="#8B5E3C"/>
      <path d="M151 65 L151 100 L185 90 Z" fill="white"/>
    </svg>
  );
}
function CompoundSunflower() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#FFFBEA"/>
      <line x1="150" y1="120" x2="150" y2="175" stroke="#4C9A2A" strokeWidth="6"/>
      <circle cx="150" cy="100" r="18" fill="#8B5E3C"/>
      {[0,45,90,135,180,225,270,315].map(a => (
        <ellipse key={a} cx="150" cy="70" rx="8" ry="18" fill="#FFD93D" transform={`rotate(${a} 150 100)`}/>
      ))}
    </svg>
  );
}
function StorySequence() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#FFF0F0"/>
      <rect x="30" y="70" width="70" height="70" rx="10" fill="#FF6B6B"/>
      <rect x="115" y="70" width="70" height="70" rx="10" fill="#FF8F8F"/>
      <rect x="200" y="70" width="70" height="70" rx="10" fill="#FFB3B3"/>
      <text x="65" y="112" textAnchor="middle" fontSize="26" fill="white" fontWeight="bold">1</text>
      <text x="150" y="112" textAnchor="middle" fontSize="26" fill="white" fontWeight="bold">2</text>
      <text x="235" y="112" textAnchor="middle" fontSize="26" fill="white" fontWeight="bold">3</text>
    </svg>
  );
}
function Opposites() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#FFF0F0"/>
      <circle cx="100" cy="100" r="45" fill="#FF6B6B"/>
      <text x="100" y="110" textAnchor="middle" fontSize="20" fill="white" fontWeight="bold">HOT</text>
      <circle cx="200" cy="100" r="45" fill="#4ECDC4"/>
      <text x="200" y="110" textAnchor="middle" fontSize="18" fill="white" fontWeight="bold">COLD</text>
    </svg>
  );
}

function CountingBlocks() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBFA"/>
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={40 + i*45} y="90" width="35" height="35" rx="6" fill="#4ECDC4"/>
      ))}
      {[0,1,2,3,4].map(i => (
        <text key={i} x={57 + i*45} y="115" textAnchor="middle" fontSize="18" fill="white" fontWeight="bold">{i+1}</text>
      ))}
    </svg>
  );
}
function AdditionApples() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBFA"/>
      <circle cx="80" cy="110" r="25" fill="#FF6B6B"/>
      <circle cx="130" cy="110" r="25" fill="#FF6B6B"/>
      <text x="175" y="120" textAnchor="middle" fontSize="30" fill="#333" fontWeight="bold">+</text>
      <circle cx="220" cy="110" r="25" fill="#FF6B6B"/>
    </svg>
  );
}
function SubtractionApples() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBFA"/>
      <circle cx="70" cy="110" r="22" fill="#FF6B6B"/>
      <circle cx="120" cy="110" r="22" fill="#FF6B6B"/>
      <circle cx="170" cy="110" r="22" fill="#FFD5D5" stroke="#FF6B6B" strokeDasharray="4"/>
      <text x="215" y="120" textAnchor="middle" fontSize="30" fill="#333" fontWeight="bold">-</text>
      <circle cx="255" cy="110" r="22" fill="#FF6B6B"/>
    </svg>
  );
}
function Shapes() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBFA"/>
      <polygon points="70,140 100,80 130,140" fill="#4ECDC4"/>
      <rect x="150" y="85" width="55" height="55" fill="#FFD93D"/>
      <circle cx="250" cy="112" r="28" fill="#FF6B6B"/>
    </svg>
  );
}
function ComparingScale() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBFA"/>
      <line x1="150" y1="60" x2="150" y2="150" stroke="#888" strokeWidth="6"/>
      <line x1="90" y1="80" x2="210" y2="80" stroke="#888" strokeWidth="6"/>
      <line x1="90" y1="80" x2="90" y2="105" stroke="#888" strokeWidth="4"/>
      <line x1="210" y1="80" x2="210" y2="100" stroke="#888" strokeWidth="4"/>
      <ellipse cx="90" cy="115" rx="30" ry="14" fill="#4ECDC4"/>
      <ellipse cx="210" cy="108" rx="22" ry="10" fill="#4ECDC4"/>
    </svg>
  );
}
function PlaceValue() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBFA"/>
      <rect x="50" y="60" width="30" height="90" fill="#4ECDC4"/>
      <rect x="90" y="60" width="30" height="90" fill="#4ECDC4"/>
      <rect x="180" y="120" width="30" height="30" fill="#FFD93D"/>
      <rect x="220" y="120" width="30" height="30" fill="#FFD93D"/>
      <rect x="260" y="120" width="30" height="30" fill="#FFD93D"/>
      <text x="85" y="170" textAnchor="middle" fontSize="14" fill="#333">tens</text>
      <text x="235" y="170" textAnchor="middle" fontSize="14" fill="#333">ones</text>
    </svg>
  );
}
function SkipCounting() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBFA"/>
      <line x1="30" y1="120" x2="270" y2="120" stroke="#888" strokeWidth="4"/>
      {[0,1,2,3,4].map(i => (
        <circle key={i} cx={50 + i*50} cy="120" r="6" fill="#4ECDC4"/>
      ))}
      <path d="M50 110 Q100 70 150 110" stroke="#FF6B6B" strokeWidth="3" fill="none"/>
      <path d="M150 110 Q200 70 250 110" stroke="#FF6B6B" strokeWidth="3" fill="none"/>
    </svg>
  );
}
function AdditionBig() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBFA"/>
      {[0,1,2,3].map(i => <circle key={i} cx={40+i*30} cy="90" r="12" fill="#FF6B6B"/>)}
      <text x="190" y="105" textAnchor="middle" fontSize="26" fill="#333" fontWeight="bold">+</text>
      {[0,1,2].map(i => <circle key={i} cx={220+i*30} cy="90" r="12" fill="#4ECDC4"/>)}
    </svg>
  );
}
function Measurement() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBFA"/>
      <rect x="40" y="130" width="220" height="20" fill="#FFD93D"/>
      {[0,1,2,3,4,5,6].map(i => <line key={i} x1={40+i*31} y1="130" x2={40+i*31} y2="150" stroke="#B8960A" strokeWidth="2"/>)}
      <line x1="90" y1="90" x2="220" y2="90" stroke="#4ECDC4" strokeWidth="10" strokeLinecap="round"/>
    </svg>
  );
}
function Clock() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBFA"/>
      <circle cx="150" cy="105" r="60" fill="white" stroke="#4ECDC4" strokeWidth="6"/>
      <line x1="150" y1="105" x2="150" y2="65" stroke="#333" strokeWidth="5"/>
      <line x1="150" y1="105" x2="180" y2="105" stroke="#333" strokeWidth="4"/>
      <circle cx="150" cy="105" r="5" fill="#FF6B6B"/>
    </svg>
  );
}

function FiveSenses() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#FFFBEA"/>
      <circle cx="150" cy="105" r="55" fill="#FFE08A"/>
      <circle cx="130" cy="95" r="7" fill="#333"/>
      <circle cx="170" cy="95" r="7" fill="#333"/>
      <path d="M140 125 Q150 135 160 125" stroke="#333" strokeWidth="4" fill="none"/>
      <path d="M105 95 Q95 105 105 115" stroke="#333" strokeWidth="3" fill="none"/>
      <path d="M195 95 Q205 105 195 115" stroke="#333" strokeWidth="3" fill="none"/>
    </svg>
  );
}
function WeatherSeasons() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAF7FF"/>
      <circle cx="90" cy="90" r="35" fill="#FFD93D"/>
      <ellipse cx="210" cy="100" rx="45" ry="25" fill="white" stroke="#B8D4E3"/>
      <path d="M195 140 L205 155 M215 140 L225 155 M235 140 L245 155" stroke="#7FC8E8" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}
function LivingNonLiving() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBEA"/>
      <rect x="90" y="130" width="14" height="40" fill="#8B5E3C"/>
      <circle cx="97" cy="110" r="35" fill="#5AAE5A"/>
      <rect x="200" y="130" width="50" height="35" fill="#999" rx="6"/>
    </svg>
  );
}
function AnimalHabitats() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAF7FF"/>
      <rect x="0" y="120" width="300" height="80" fill="#7FC8E8"/>
      <ellipse cx="150" cy="150" rx="40" ry="20" fill="#FF8F5A"/>
      <polygon points="190,150 210,140 210,160" fill="#FF8F5A"/>
      <circle cx="135" cy="145" r="4" fill="#333"/>
    </svg>
  );
}
function PlantNeeds() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBEA"/>
      <circle cx="230" cy="60" r="25" fill="#FFD93D"/>
      <rect x="145" y="120" width="10" height="50" fill="#4C9A2A"/>
      <ellipse cx="130" cy="115" rx="25" ry="14" fill="#5AAE5A" transform="rotate(-20 130 115)"/>
      <ellipse cx="170" cy="115" rx="25" ry="14" fill="#5AAE5A" transform="rotate(20 170 115)"/>
      <path d="M60 90 L70 110 L50 110 Z" fill="#7FC8E8"/>
    </svg>
  );
}
function LifeCycles() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#FFFBEA"/>
      <ellipse cx="60" cy="120" rx="16" ry="20" fill="#F0E6D2"/>
      <ellipse cx="140" cy="120" rx="28" ry="14" fill="#8FBF4C"/>
      <circle cx="220" cy="120" r="20" fill="#D9C79A"/>
      <path d="M260 100 Q280 80 300 100 Q280 120 260 100" fill="#FF8F5A"/>
    </svg>
  );
}
function StatesOfMatter() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAF7FF"/>
      <rect x="40" y="90" width="45" height="45" fill="#B8E0F5"/>
      <ellipse cx="150" cy="120" rx="35" ry="22" fill="#7FC8E8"/>
      <ellipse cx="250" cy="90" rx="35" ry="20" fill="#E3F3FB"/>
    </svg>
  );
}
function DayAndNight() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="150" height="200" fill="#FFE9A8"/>
      <rect x="150" width="150" height="200" fill="#2B3A67"/>
      <circle cx="80" cy="100" r="35" fill="#FFD93D"/>
      <circle cx="220" cy="100" r="30" fill="#F0F0F0"/>
    </svg>
  );
}
function HumanBody() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#FFF0F0"/>
      <circle cx="150" cy="55" r="22" fill="#F4C9A0"/>
      <rect x="130" y="77" width="40" height="70" rx="14" fill="#4ECDC4"/>
      <path d="M150 100 Q140 110 150 120 Q160 110 150 100" fill="#FF6B6B"/>
      <rect x="115" y="147" width="15" height="45" fill="#F4C9A0"/>
      <rect x="170" y="147" width="15" height="45" fill="#F4C9A0"/>
    </svg>
  );
}
function CaringForEarth() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBEA"/>
      <circle cx="150" cy="105" r="55" fill="#5AAE5A"/>
      <path d="M130 80 a25 25 0 1 0 5 -8" stroke="white" strokeWidth="6" fill="none"/>
      <polygon points="135,72 145,72 138,88" fill="white"/>
    </svg>
  );
}

function TwoKidsToy() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBF9"/>
      <circle cx="90" cy="90" r="26" fill="#FFCB9A"/>
      <rect x="65" y="116" width="50" height="55" rx="14" fill="#FF6B6B"/>
      <circle cx="210" cy="90" r="26" fill="#FFCB9A"/>
      <rect x="185" y="116" width="50" height="55" rx="14" fill="#4ECDC4"/>
      <circle cx="150" cy="140" r="18" fill="#FFD93D"/>
    </svg>
  );
}
function SayingSorry() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBF9"/>
      <ellipse cx="150" cy="90" rx="70" ry="45" fill="white" stroke="#95E1D3" strokeWidth="4"/>
      <path d="M120 200 L140 140 L110 140 Z" fill="white" stroke="#95E1D3" strokeWidth="4"/>
      <path d="M135 90 Q150 75 165 90 Q150 105 135 90" fill="#FF6B6B"/>
    </svg>
  );
}
function WaitingTurn() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBF9"/>
      {[0,1,2].map(i => (
        <g key={i}>
          <circle cx={70 + i*70} cy="90" r="20" fill="#FFCB9A"/>
          <rect x={70+i*70-22} y="112" width="44" height="50" rx="12" fill={i===0 ? "#FF6B6B" : "#95E1D3"}/>
        </g>
      ))}
    </svg>
  );
}
function GoodListener() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBF9"/>
      <path d="M120 60 Q80 100 120 140 Q140 140 140 120 L140 80 Q140 60 120 60" fill="#F4C9A0"/>
      <path d="M170 80 Q190 90 190 100 Q190 110 170 120" stroke="#4ECDC4" strokeWidth="5" fill="none"/>
      <path d="M185 70 Q215 90 215 100 Q215 110 185 130" stroke="#4ECDC4" strokeWidth="5" fill="none"/>
    </svg>
  );
}
function HelpingFriend() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBF9"/>
      <path d="M100 120 Q130 90 160 120" stroke="#F4C9A0" strokeWidth="16" strokeLinecap="round" fill="none"/>
      <path d="M140 120 Q170 90 200 120" stroke="#FFCB9A" strokeWidth="16" strokeLinecap="round" fill="none"/>
      <circle cx="150" cy="140" r="16" fill="#FF6B6B"/>
    </svg>
  );
}
function Honesty() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBF9"/>
      <ellipse cx="150" cy="100" rx="80" ry="50" fill="white" stroke="#95E1D3" strokeWidth="4"/>
      <path d="M120 100 L140 120 L180 80" stroke="#4ECDC4" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function PersonalSpace() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBF9"/>
      <circle cx="150" cy="110" r="70" fill="none" stroke="#95E1D3" strokeWidth="4" strokeDasharray="8"/>
      <circle cx="150" cy="90" r="22" fill="#FFCB9A"/>
      <rect x="128" y="112" width="44" height="50" rx="14" fill="#4ECDC4"/>
    </svg>
  );
}
function DisagreeingRespectfully() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBF9"/>
      <ellipse cx="95" cy="80" rx="55" ry="35" fill="white" stroke="#FF6B6B" strokeWidth="3"/>
      <ellipse cx="205" cy="80" rx="55" ry="35" fill="white" stroke="#4ECDC4" strokeWidth="3"/>
      <path d="M150 130 Q150 150 150 165" stroke="#95E1D3" strokeWidth="4"/>
    </svg>
  );
}
function FollowingRules() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBF9"/>
      <rect x="90" y="55" width="120" height="130" rx="10" fill="white" stroke="#95E1D3" strokeWidth="4"/>
      <rect x="130" y="45" width="40" height="18" rx="6" fill="#95E1D3"/>
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x="105" y={80+i*30} width="14" height="14" rx="3" fill="#4ECDC4"/>
          <line x1="130" y1={87+i*30} x2="195" y2={87+i*30} stroke="#ccc" strokeWidth="4"/>
        </g>
      ))}
    </svg>
  );
}
function Gratitude() {
  return (
    <svg viewBox="0 0 300 200">
      <rect width="300" height="200" rx="20" fill="#EAFBF9"/>
      <path d="M150 150 C 90 110 90 60 130 60 C 145 60 150 75 150 75 C 150 75 155 60 170 60 C 210 60 210 110 150 150 Z" fill="#FF6B6B"/>
    </svg>
  );
}

const illustrations = {
  'beginning-sounds': Ball,
  'ending-sounds': Dog,
  'rhyming-words': RhymeCatHat,
  'sight-words': SightWordsBook,
  'reading-comprehension': StoryTime,
  'blending-sounds': BlendingLetters,
  'digraphs': Ship,
  'compound-words': CompoundSunflower,
  'story-sequencing': StorySequence,
  'opposites': Opposites,
  'counting-20': CountingBlocks,
  'addition-10': AdditionApples,
  'subtraction-10': SubtractionApples,
  'shapes': Shapes,
  'comparing-numbers': ComparingScale,
  'place-value': PlaceValue,
  'skip-counting': SkipCounting,
  'addition-20': AdditionBig,
  'measurement': Measurement,
  'telling-time': Clock,
  'five-senses': FiveSenses,
  'weather-seasons': WeatherSeasons,
  'living-nonliving': LivingNonLiving,
  'animal-habitats': AnimalHabitats,
  'plant-needs': PlantNeeds,
  'life-cycles': LifeCycles,
  'states-of-matter': StatesOfMatter,
  'day-and-night': DayAndNight,
  'human-body': HumanBody,
  'caring-for-earth': CaringForEarth,
  'sharing-toys': TwoKidsToy,
  'saying-sorry': SayingSorry,
  'waiting-turn': WaitingTurn,
  'good-listener': GoodListener,
  'helping-friend': HelpingFriend,
  'honesty': Honesty,
  'personal-space': PersonalSpace,
  'disagreeing-respectfully': DisagreeingRespectfully,
  'following-rules': FollowingRules,
  'gratitude': Gratitude
};

export default illustrations;
