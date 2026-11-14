import Link from 'next/link';

export default function BlogCard({ 
  id,
  image, 
  title, 
  description, 
  date, 
  className = "" 
}) {
  return (
    <Link 
      href={`/blog/${id}`}
      className={`group flex w-full flex-col items-stretch gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md sm:flex-row sm:items-center sm:gap-6 sm:p-6 ${className}`}
    >
      {/* Image Container */}
      <div className="h-40 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-36 sm:w-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col justify-between space-y-3">
        <div className="space-y-2">
          <h3 className="line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 sm:text-2xl">
            {title}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        <p className="text-sm text-gray-400 font-normal">
          {date}
        </p>
      </div>
    </Link>
  );
}