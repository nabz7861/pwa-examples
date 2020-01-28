var games = [
	{
		slug: 'course1',
		name: 'course1',
		author: 'Zosia and Bartek',
		twitter: 'bartaz',
		website: '',
		github: 'github.com/bartaz/lost-in-cyberspace'
	},
	{
		slug: 'course2',
		name: 'course2',
		author: 'Platane',
		twitter: 'platane_',
		website: 'github.com/Platane',
		github: 'github.com/Platane/js13k-2017'
	},
	{
		slug: 'course3',
		name: 'course3',
		author: 'Mary Knize',
		twitter: 'captainpainway',
		website: 'maryknize.com',
		github: 'github.com/captainpainway/coconutty'
	},
	{
		slug: 'course4',
		name: 'course4',
		author: 'MarcGuinea',
		twitter: 'MarcGuineaCasas',
		website: 'marcguinea.com',
		github: 'github.com/mguinea/lost-pacman'
	},
	{
		slug: 'course5',
		name: 'course5',
		author: 'Alex Swan',
		twitter: 'BoldBigflank',
		website: 'bold-it.com',
		github: 'github.com/BoldBigflank/js13k-polyhedron'
	},
	{
		slug: 'course6',
		name: 'course6',
		author: 'Madmarcel',
		twitter: 'madmarcel',
		website: '',
		github: 'github.com/madmarcel/js13k2017'
	},
	{
		slug: 'course7',
		name: 'course7',
		author: 'Sorskoot',
		twitter: 'Sorskoot',
		website: 'timmykokke.com',
		github: 'github.com/sorskoot/js13kgames_2017_Lost'
	},
	{
		slug: 'course8',
		name: 'course8',
		author: 'Nylki',
		twitter: 'nylk',
		website: 'github.com/nylki',
		github: 'github.com/nylki/shifted-dimensions'
	},
	{
		slug: 'course9',
		name: 'course9',
		author: 'Jack Greenberg',
		twitter: 'thprgrmmrjck',
		website: '',
		github: 'github.com/theProgrammerJack/js13k2017'
	},
	{
		slug: 'course10',
		name: 'course10',
		author: 'Kenneth Banico',
		twitter: 'kjdesigns671',
		website: '',
		github: 'github.com/kbanico/lost-in-guam-vr-game'
	},
	{
		slug: 'balloon-problems',
		name: 'Balloon Problems',
		author: 'Fasility',
		twitter: 'Fasility_VR',
		website: 'fasility.com',
		github: 'github.com/flowerio/balloon-problems'
	},
	{
		slug: 'lost-in-my-mind',
		name: 'Lost in my mind',
		author: 'Lasagne Games',
		twitter: 'Lazyeels',
		website: '',
		github: 'github.com/lazyeels/js13kb'
	},
	{
		slug: 'lost-in-the-forest-dungeon',
		name: 'Lost In The Forest Dungeon',
		author: 'Luke',
		twitter: 'cannl',
		website: 'lc-apps.co.uk',
		github: 'github.com/lcapps-luke/js13k-lost'
	},
	{
		slug: 'galacticdiamond',
		name: 'GalacticDiamond',
		author: 'Mitruska',
		twitter: 'mitruska_',
		website: '',
		github: 'github.com/mitruch/GalacticDiamond-JS13KGames-2017'
	},
	{
		slug: 'cat-meow',
		name: 'Cat Meow',
		author: 'Lislis',
		twitter: '',
		website: '',
		github: 'github.com/lislis/cat-meow'
	},
	{
		slug: 'metamorphosis',
		name: 'Metamorphosis',
		author: 'Steff and Tanyuan',
		twitter: '',
		website: '',
		github: 'github.com/tanyuan/metamorphosis'
	},
	{
		slug: 'a-snake',
		name: 'A-Snake',
		author: 'Nick Frazier',
		twitter: 'nrf',
		website: 'nickfrazier.com',
		github: 'github.com/fraziern/vrsnake'
	},
	{
		slug: 'wherewhat',
		name: 'Where? What?',
		author: '..Katu..',
		twitter: '',
		website: '',
		github: 'github.com/katubrd/LostVR'
	},
	{
		slug: 'dont-let-your-dreams-be-memes',
		name: 'Don\'t let your dreams be memes',
		author: 'Mark Vasilkov',
		twitter: 'mvasilkov',
		website: 'mvasilkov.ovh',
		github: 'github.com/mvasilkov/aframe13k'
	},
	{
		slug: 'fly-south',
		name: 'Fly South',
		author: 'Christian Paul (jaller94)',
		twitter: '',
		website: 'chrpaul.de',
		github: 'github.com/jaller94/fly-south'
	},
	{
		slug: 'prisonri0t',
		name: 'PrisonRi0t',
		author: 'Sondor',
		twitter: '',
		website: '',
		github: 'github.com/gabboraron/prison'
	},
	{
		slug: 'debriss',
		name: 'DebrISS',
		author: 'Kovolmany',
		twitter: '',
		website: '',
		github: 'github.com/gabboraron/iss'
	},
	{
		slug: 'vr-racing',
		name: 'VR Racing',
		author: 'Vedansh Bhartia and Kartikey Pandey',
		twitter: '',
		website: '',
		github: 'github.com/vedanshbhartia/vr_racing'
	},
	{
		slug: 'a-box-invaders',
		name: 'A-box Invaders',
		author: 'Felipe Do E. Santo',
		twitter: 'felipez3r0',
		website: 'hardcodigo.com.br',
		github: 'github.com/felipez3r0/a-box-invaders'
	},
	{
		slug: 'world-lost',
		name: 'World Lost',
		author: 'Ms. K. Bhuvana Meenakshi',
		twitter: 'bhuvanakotees1',
		website: 'bhuvanameenakshik.wixsite.com/bhuvanameenakshi',
		github: 'github.com/bhuvanameenakshi/World_Lost'
	},
	{
		slug: 'give-space',
		name: 'Give Space',
		author: 'Ram',
		twitter: 'ram_gurumukhi',
		website: 'gurumukhi.wordpress.com',
		github: 'github.com/gurumukhi/13kGiveSpaceGame'
	},
	{
		slug: 'lost-in-metaverse',
		name: 'Lost in Metaverse',
		author: 'Karan Ganesan',
		twitter: 'karanganesan',
		website: 'linkedin.com/in/karanganesan',
		github: 'github.com/karanganesan/Lost_in_Metaverse'
	},
	{
		slug: 'emma-3d',
		name: 'Emma-3D',
		author: 'Prateek Roushan',
		twitter: '',
		website: '',
		github: 'github.com/coderprateek/Emma-3D'
	}
];