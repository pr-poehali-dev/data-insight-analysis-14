export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/a8d3ac36-ece3-46bd-8f03-eb68f1ed8474/files/bf413ed7-a3dd-450e-9eab-1c56920ca330.jpg"
          alt="Дизайн ванной комнаты"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1" id="about">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Стиль · Минимализм</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Белый цвет, чистые линии и продуманная эргономика — пространство, где хочется учиться, отдыхать и развиваться. Минимум лишнего, максимум функциональности.
        </p>
        <div className="flex gap-8 mb-8">
          <div>
            <p className="text-3xl lg:text-4xl font-bold text-neutral-900">181 280 ₽</p>
            <p className="text-sm text-neutral-500 uppercase tracking-wide mt-1">Фактическая смета</p>
          </div>
          <div>
            <p className="text-3xl lg:text-4xl font-bold text-neutral-900">4 помещения</p>
            <p className="text-sm text-neutral-500 uppercase tracking-wide mt-1">Комната, ванная, санузел, коридор</p>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Смотреть смету
        </button>
      </div>
    </div>
  );
}