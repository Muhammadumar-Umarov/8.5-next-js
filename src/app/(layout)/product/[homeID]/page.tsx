import type { Metadata } from "next"
import { Card, Tag, Rate, Image } from "antd"
import { ShoppingCartOutlined, TagOutlined } from "@ant-design/icons"

export const metadata: Metadata = {
  title: "Product Detail page",
  description: "Generated by Muhammadumar",
}

interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

interface Props {
  params: {
    homeID: string
  }
}

export default async function ProductDetail({ params }: { params: Promise<{ homeID: string }> }) {
  const { homeID } = await params;
  const id = (await params).homeID

  try {
    const data = await fetch(`https://dummyjson.com/products/${id}`)

    if (!data.ok) {
      throw new Error("Product not found")
    }

    const product: Product = await data.json()
    const discountedPrice = product.price - (product.price * product.discountPercentage) / 100

    return (
      <div className="min-h-screen bg-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Image
              src={product.thumbnail || "/placeholder.svg"}
              alt={product.title}
              className="w-full max-w-md mx-auto rounded-lg"
              fallback="/placeholder.svg?height=400&width=400"
            />
          </div>

          <Card className="mb-6">
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h1>
                <div className="flex gap-2 mb-3">
                  <Tag color="blue">{product.brand}</Tag>
                  <Tag color="green">{product.category}</Tag>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Rate disabled defaultValue={product.rating} allowHalf />
                <span className="text-gray-600">({product.rating})</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-red-600">${discountedPrice.toFixed(2)}</span>
                {product.discountPercentage > 0 && (
                  <>
                    <span className="text-lg text-gray-500 line-through">${product.price.toFixed(2)}</span>
                    <Tag color="red">{product.discountPercentage.toFixed(0)}% OFF</Tag>
                  </>
                )}
              </div>

              <div className="flex items-center gap-2">
                <ShoppingCartOutlined />
                <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
                  {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
            </div>
          </Card>

          <Card title="Product Details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-gray-500">Product ID:</span>
                <p className="font-medium">{product.id}</p>
              </div>
              <div>
                <span className="text-gray-500">Brand:</span>
                <p className="font-medium">{product.brand}</p>
              </div>
              <div>
                <span className="text-gray-500">Category:</span>
                <p className="font-medium">{product.category}</p>
              </div>
              <div>
                <span className="text-gray-500">Stock:</span>
                <p className="font-medium">{product.stock} units</p>
              </div>
            </div>
          </Card>

          {product.images && product.images.length > 1 && (
            <Card title="More Images" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {product.images.slice(1, 5).map((image, index) => (
                  <Image
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${product.title} ${index + 1}`}
                    className="rounded-lg"
                    fallback="/placeholder.svg?height=150&width=150"
                  />
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    )
  } catch (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <div className="text-center py-8">
            <TagOutlined className="text-4xl text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Product Not Found</h2>
            <p className="text-gray-600">The product you're looking for doesn't exist.</p>
          </div>
        </Card>
      </div>
    )
  }
}

