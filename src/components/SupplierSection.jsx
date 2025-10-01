import { useEffect, useRef } from 'react'

const SupplierSection = () => {
  const suppliers = [
    { name: 'British Gas', logo: 'https://i.ibb.co/SXn7gsSy/british-gas.png' },
    { name: 'Crown Gas & Power', logo: 'https://i.ibb.co/9Fw40dv/Crown.png' },
    { name: 'Drax', logo: 'https://i.ibb.co/8Hgz06s/drax-RGB-small.webp' },
    { name: 'EDF Energy', logo: 'https://i.ibb.co/nMGZdHfk/edf-1-1.png' },
    { name: 'E.ON', logo: 'https://i.ibb.co/QjhMJkPK/eon-next-1.png' },
    { name: 'Opus Energy', logo: 'https://i.ibb.co/nNsvqgDm/Opus.png' },
    { name: 'SEFE Energy', logo: 'https://i.ibb.co/MkFMq6ZQ/sefe-1-1.png' },
    { name: 'Smartest Energy', logo: 'https://i.ibb.co/BVkv7RS3/smartestenergy-limited-vector-logo.png' },
    { name: 'Scottish Power', logo: 'https://i.ibb.co/SXYPL7KG/sp-1-1.png' },
    { name: 'Yu Energy', logo: 'https://i.ibb.co/SDJszV18/yu-1-1.png' },
    { name: 'Valda Energy', logo: 'https://i.ibb.co/xtWgKWXq/valda.png' },
    { name: 'Utilita', logo: 'https://i.ibb.co/gqv7rbX/utilita-2.png' },
    { name: 'Pozitive Energy', logo: 'https://i.ibb.co/jZjD8jjG/proz-1-1.png' },
    { name: 'Total Gas & Power', logo: 'https://i.ibb.co/0RJ8d5g1/tgpl-1.png' },
    { name: 'SSE', logo: null },
    { name: 'Shell Energy', logo: null },
  ]

  const suppliersWithLogos = suppliers.filter(s => s.logo)
  const duplicatedSuppliers = [...suppliersWithLogos, ...suppliersWithLogos]
  
  const scrollRef = useRef(null)
  
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    
    let animationId
    let scrollPos = 0
    
    const animate = () => {
      scrollPos += 0.5
      
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0
      }
      
      scrollContainer.scrollLeft = scrollPos
      animationId = requestAnimationFrame(animate)
    }
    
    animationId = requestAnimationFrame(animate)
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Major Energy Suppliers Under Investigation
          </h2>
          <p className="text-lg text-gray-600">
            Businesses with these suppliers may have valid claims for hidden commissions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <div 
            ref={scrollRef}
            className="overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            <div className="flex items-center gap-6" style={{ width: 'max-content' }}>
              {duplicatedSuppliers.map((supplier, index) => (
                <div
                  key={`${supplier.name}-${index}`}
                  className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                  style={{ width: '160px', height: '80px' }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={supplier.logo}
                      alt={supplier.name}
                      className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={{ maxHeight: '50px' }}
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.innerHTML = `<span class="text-gray-500 text-sm font-medium">${supplier.name}</span>`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          * This list is not exhaustive. Claims can be made against any energy supplier who failed to disclose broker commissions.
        </p>
      </div>
    </section>
  )
}

export default SupplierSection