export default function Home() {
    return (
      <div>
        {/* Hero Section */}
        <section style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#e0f5ec' }}>
          <h1>Your Compass to Conscious Living</h1>
          <p>Discover eco-friendly products that help the planet — and your peace of mind.</p>
          <button style={{ marginTop: '1rem' }}>Shop Now</button>
        </section>
  
        {/* Featured Categories */}
        <section style={{ padding: '3rem 2rem' }}>
          <h2>Explore Eco Categories</h2>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div>Toiletries</div>
            <div>Cleaning Products</div>
            <div>Clothing</div>
            <div>Alcohol</div>
          </div>
        </section>
  
        {/* About EcoFindAI */}
        <section style={{ padding: '3rem 2rem', backgroundColor: '#f2f2f2' }}>
          <h2>Why EcoFindAI?</h2>
          <p>We use smart tech to help you find verified, sustainable products — all in one place.</p>
        </section>
  
        {/* Footer */}
        <footer style={{ padding: '2rem', textAlign: 'center' }}>
          <p>© 2025 EcoFindAI. All rights reserved.</p>
        </footer>
      </div>
    )
  }