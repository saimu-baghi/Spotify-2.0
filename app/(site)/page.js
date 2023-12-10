import Header from '@/components/Header';
import ListItem from '@/components/ListItem';
import WeekendMix from '@/components/Music/WeekendMix';

function Home() {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        {/* <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem image="/images/liked.png" name="Liked Songs" href="liked" />
          </div>
        </div> */}
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <a href='#' className="text-white text-2xl font-bold hover:underline">
            Weekend Mix
          </a>
          <a href='#' className='text-neutral-400 hover:underline font-semibold'>Show all</a>
        </div>
        <div className='flex flex-row'>
          <WeekendMix />
        </div>
      </div>
    </div>
  );
}

export default Home;
