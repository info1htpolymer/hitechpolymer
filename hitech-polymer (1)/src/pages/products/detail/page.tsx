import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { Link, useParams } from 'react-router-dom';
import { allProducts } from '@/mocks/products';
import { useMemo } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = useMemo(() => allProducts.find((p) => p.id === id), [id]);

  if (!product) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-background-50 pt-16">
          <div className="text-center px-6">
            <h1 className="font-heading text-4xl font-bold text-foreground-900">Product Not Found</h1>
            <p className="text-foreground-600 mt-4">The product you are looking for does not exist.</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-primary-500 text-background-50 font-semibold text-sm hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Back to Products
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      <section className="relative w-full min-h-[400px] md:min-h-[500px] flex items-end pt-16">
        <div className="absolute inset-0">
          <img
            src={product.heroImage}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-primary-900/30"></div>
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-14 py-16 md:py-20">
          <div className="flex items-center gap-2 text-sm text-background-50/70 mb-4">
            <Link to="/products" className="hover:text-background-50 transition-colors">Products</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-background-50">{product.name}</span>
          </div>
          <span className="inline-block px-3 py-1 rounded-md bg-accent-500/20 text-accent-300 text-xs font-medium uppercase tracking-wider mb-4">
            {product.category}
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-background-50 leading-tight">{product.name}</h1>
          <p className="text-lg text-background-50/80 mt-2">{product.subtitle}</p>
        </div>
      </section>

      <section className="w-full bg-background-50 py-16 md:py-20">
        <div className="w-full px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground-900 mb-6 leading-tight">
                Product Overview
              </h2>
              <p className="text-foreground-600 leading-relaxed">{product.fullDescription}</p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-background-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-background-100 py-16 md:py-20">
        <div className="w-full px-6 md:px-10 lg:px-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground-900 mb-8 leading-tight">
            Technical Specifications
          </h2>
          <div className="rounded-xl border border-background-200/70 bg-background-50 overflow-hidden">
            <table className="w-full text-left">
              <tbody>
                {product.specs.map((spec, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-background-50' : 'bg-background-100/50'}>
                    <td className="px-6 py-4 text-sm font-medium text-foreground-700 w-1/2">{spec.label}</td>
                    <td className="px-6 py-4 text-sm text-foreground-900">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="w-full bg-background-50 py-16 md:py-20">
        <div className="w-full px-6 md:px-10 lg:px-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground-900 mb-8 leading-tight">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-background-100">
                <div className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="ri-check-line text-accent-600"></i>
                </div>
                <p className="text-sm text-foreground-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-background-100 py-16 md:py-20">
        <div className="w-full px-6 md:px-10 lg:px-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground-900 mb-8 leading-tight">
            Applications
          </h2>
          <div className="flex flex-wrap gap-3">
            {product.applications.map((app, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-secondary-100 text-secondary-800 text-sm font-medium">
                {app}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-primary-800 py-16 md:py-20">
        <div className="w-full px-6 md:px-10 lg:px-14 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-background-50 mb-4 leading-tight">
            Interested in {product.name}?
          </h2>
          <p className="text-background-50/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Request a sample, technical data sheet, or speak with our team about your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent-500 text-background-50 font-semibold text-sm hover:bg-accent-600 transition-colors duration-200 whitespace-nowrap cursor-pointer"
          >
            Request Information
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}