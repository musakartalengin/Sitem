export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="animate-pulse">
            <div className="h-8 w-32 bg-white/20 rounded mb-8" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-6 w-24 bg-white/20 rounded-full" />
                <div className="h-6 w-2 bg-white/20 rounded" />
                <div className="h-6 w-24 bg-white/20 rounded" />
              </div>
              <div className="h-12 w-3/4 mx-auto bg-white/20 rounded mb-4" />
              <div className="h-12 w-1/2 mx-auto bg-white/20 rounded mb-6" />
              <div className="h-6 w-2/3 mx-auto bg-white/20 rounded" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white/95" />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-gray-200 rounded w-3/4" />
            <div className="h-6 bg-gray-200 rounded" />
            <div className="h-6 bg-gray-200 rounded w-5/6" />
            <div className="h-6 bg-gray-200 rounded w-2/3" />
          </div>
        </div>
      </div>
    </div>
  )
} 