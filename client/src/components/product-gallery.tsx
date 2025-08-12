import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@shared/schema";

export default function ProductGallery() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Recommended Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {Array.from({ length: 18 }).map((_, index) => (
            <Card key={index} className="shadow-md overflow-hidden">
              <div className="w-full h-32 bg-gray-300 animate-pulse"></div>
              <CardContent className="p-3">
                <div className="h-4 bg-gray-300 rounded animate-pulse mb-2"></div>
                <div className="h-3 bg-gray-300 rounded animate-pulse w-2/3"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Recommended Products</h2>
        <p className="text-gray-600">No products available at the moment.</p>
      </div>
    );
  }

  // Split products into rows of 6
  const productRows = [];
  for (let i = 0; i < products.length; i += 6) {
    productRows.push(products.slice(i, i + 6));
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8" data-testid="text-recommended-products">Recommended Products</h2>
      
      {productRows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {row.map((product) => (
            <Card 
              key={product.id} 
              className="shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
              data-testid={`card-product-${product.id}`}
            >
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-32 object-cover"
                data-testid={`img-product-${product.id}`}
              />
              <CardContent className="p-3">
                <h3 className="text-sm font-medium text-gray-900 truncate" data-testid={`text-product-name-${product.id}`}>
                  {product.name}
                </h3>
                <p className="text-xs text-gray-600 mt-1" data-testid={`text-product-price-${product.id}`}>
                  ${product.minPrice} - ${product.maxPrice}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
}
