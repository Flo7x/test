export class Product {
  id: string | undefined;
  title: string | undefined;
  price: string | undefined;
  description: string | undefined;
  category: string | undefined;
  image: string | undefined;
  rating?: {
    rate: string | undefined;
    count: string | undefined;
  }
}
