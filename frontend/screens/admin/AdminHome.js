
import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/NavBar';

const { width } = Dimensions.get('window');

export default function FoodNowDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Sample data
  const stats = {
    totalOrders: 248,
    todaySales: 3240,
    activeOrders: 12,
    completedToday: 236,
    avgOrderValue: 13.06,
    peakHour: '12:00 PM',
    topProduct: 'Chicken Biryani',
    lowStockItems: 3
  };

  const topProducts = [
    { name: 'Chicken Biryani', sales: 45, revenue: 675 },
    { name: 'Veg Thali', sales: 38, revenue: 570 },
    { name: 'Paneer Tikka', sales: 32, revenue: 480 },
    { name: 'Masala Dosa', sales: 28, revenue: 336 },
    { name: 'Butter Naan', sales: 25, revenue: 250 }
  ];

  const recentOrders = [
    { id: '#ORD-1248', customer: 'John Doe', items: 3, amount: 42, status: 'preparing', time: '2m ago' },
    { id: '#ORD-1247', customer: 'Sarah Smith', items: 2, amount: 28, status: 'ready', time: '5m ago' },
    { id: '#ORD-1246', customer: 'Mike Johnson', items: 4, amount: 56, status: 'completed', time: '8m ago' },
    { id: '#ORD-1245', customer: 'Emma Wilson', items: 1, amount: 15, status: 'preparing', time: '12m ago' }
  ];

  const getStatusStyle = (status) => {
    switch(status) {
      case 'preparing': return styles.statusPreparing;
      case 'ready': return styles.statusReady;
      case 'completed': return styles.statusCompleted;
      default: return styles.statusDefault;
    }
  };

  const getRankColor = (index) => {
    switch(index) {
      case 0: return '#EAB308';
      case 1: return '#9CA3AF';
      case 2: return '#EA580C';
      default: return '#A855F7';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={[styles.statCard, styles.statCardOrange]}>
            <View style={styles.statHeader}>
              <View style={styles.statIcon}>
                <Text style={styles.statIconText}>🛒</Text>
              </View>
              <Text style={styles.statTrend}>📈</Text>
            </View>
            <Text style={styles.statLabel}>Total Orders</Text>
            <Text style={styles.statValue}>{stats.totalOrders}</Text>
            <Text style={styles.statChange}>+12% from yesterday</Text>
          </View>

          <View style={[styles.statCard, styles.statCardGreen]}>
            <View style={styles.statHeader}>
              <View style={styles.statIcon}>
                <Text style={styles.statIconText}>💰</Text>
              </View>
              <Text style={styles.statTrend}>📈</Text>
            </View>
            <Text style={styles.statLabel}>Today's Sales</Text>
            <Text style={styles.statValue}>₹{stats.todaySales}</Text>
            <Text style={styles.statChange}>Avg: ₹{stats.avgOrderValue}/order</Text>
          </View>

          <View style={[styles.statCard, styles.statCardBlue]}>
            <View style={styles.statHeader}>
              <View style={styles.statIcon}>
                <Text style={styles.statIconText}>⏰</Text>
              </View>
              <Text style={styles.statTrend}>⚠️</Text>
            </View>
            <Text style={styles.statLabel}>Active Orders</Text>
            <Text style={styles.statValue}>{stats.activeOrders}</Text>
            <Text style={styles.statChange}>Need attention</Text>
          </View>

          <View style={[styles.statCard, styles.statCardPurple]}>
            <View style={styles.statHeader}>
              <View style={styles.statIcon}>
                <Text style={styles.statIconText}>✅</Text>
              </View>
              <Text style={styles.statTrend}>📈</Text>
            </View>
            <Text style={styles.statLabel}>Completed</Text>
            <Text style={styles.statValue}>{stats.completedToday}</Text>
            <Text style={styles.statChange}>Peak: {stats.peakHour}</Text>
          </View>
        </View>

        {/* Period Selector */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Sales Overview</Text>
            <View style={styles.periodSelector}>
              {['today', 'week', 'month'].map(period => (
                <TouchableOpacity
                  key={period}
                  onPress={() => setSelectedPeriod(period)}
                  style={[
                    styles.periodButton,
                    selectedPeriod === period && styles.periodButtonActive
                  ]}
                >
                  <Text style={[
                    styles.periodButtonText,
                    selectedPeriod === period && styles.periodButtonTextActive
                  ]}>
                    {period.charAt(0).toUpperCase() + period.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Sales Chart Placeholder */}
          <View style={styles.chartContainer}>
            <View style={styles.chartBar}>
              <View style={[styles.bar, { height: 60 }]} />
              <Text style={styles.barLabel}>9AM</Text>
            </View>
            <View style={styles.chartBar}>
              <View style={[styles.bar, { height: 90 }]} />
              <Text style={styles.barLabel}>10AM</Text>
            </View>
            <View style={styles.chartBar}>
              <View style={[styles.bar, { height: 120 }]} />
              <Text style={styles.barLabel}>11AM</Text>
            </View>
            <View style={styles.chartBar}>
              <View style={[styles.bar, { height: 180 }]} />
              <Text style={styles.barLabel}>12PM</Text>
            </View>
            <View style={styles.chartBar}>
              <View style={[styles.bar, { height: 160 }]} />
              <Text style={styles.barLabel}>1PM</Text>
            </View>
            <View style={styles.chartBar}>
              <View style={[styles.bar, { height: 110 }]} />
              <Text style={styles.barLabel}>2PM</Text>
            </View>
            <View style={styles.chartBar}>
              <View style={[styles.bar, { height: 70 }]} />
              <Text style={styles.barLabel}>3PM</Text>
            </View>
            <View style={styles.chartBar}>
              <View style={[styles.bar, { height: 50 }]} />
              <Text style={styles.barLabel}>4PM</Text>
            </View>
          </View>
        </View>

        {/* Top Products */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Products</Text>
          {topProducts.map((product, index) => (
            <View key={index} style={styles.productItem}>
              <View style={styles.productLeft}>
                <View style={[styles.rankBadge, { backgroundColor: getRankColor(index) }]}>
                  <Text style={styles.rankText}>{index + 1}</Text>
                </View>
                <View>
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productSales}>{product.sales} orders</Text>
                </View>
              </View>
              <Text style={styles.productRevenue}>₹{product.revenue}</Text>
            </View>
          ))}
        </View>

        {/* Recent Orders */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Orders</Text>
          {recentOrders.map((order, index) => (
            <View key={index} style={styles.orderItem}>
              <View style={styles.orderHeader}>
                <View style={styles.orderLeft}>
                  <View style={styles.orderIcon}>
                    <Text style={styles.orderIconText}>🛒</Text>
                  </View>
                  <View>
                    <Text style={styles.orderId}>{order.id}</Text>
                    <Text style={styles.orderCustomer}>{order.customer}</Text>
                  </View>
                </View>
                <View style={getStatusStyle(order.status)}>
                  <Text style={styles.statusText}>{order.status}</Text>
                </View>
              </View>
              <View style={styles.orderFooter}>
                <Text style={styles.orderDetails}>{order.items} items • {order.time}</Text>
                <Text style={styles.orderAmount}>₹{order.amount}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>+ New Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>View Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Inventory</Text>
          </TouchableOpacity>
        </View>

        {/* Alerts */}
        <View style={[styles.section, styles.alertsSection]}>
          <View style={styles.alertsHeader}>
            <Text style={styles.alertIcon}>⚠️</Text>
            <Text style={styles.alertsTitle}>Alerts</Text>
          </View>
          <Text style={styles.alertText}>⚠️ {stats.lowStockItems} items low in stock</Text>
          <Text style={styles.alertText}>🕐 {stats.activeOrders} orders pending</Text>
          <Text style={styles.alertText}>⭐ Peak hours approaching</Text>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#581C87',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 48,
    height: 48,
    backgroundColor: '#F97316',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 12,
    color: '#E9D5FF',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  timeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  dateText: {
    fontSize: 11,
    color: '#E9D5FF',
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: '#A855F7',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 12,
  },
  statCard: {
    width: (width - 44) / 2,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  statCardOrange: {
    backgroundColor: '#F97316',
  },
  statCardGreen: {
    backgroundColor: '#22C55E',
  },
  statCardBlue: {
    backgroundColor: '#3B82F6',
  },
  statCardPurple: {
    backgroundColor: '#A855F7',
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  statIcon: {
    width: 36,
    height: 36,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statIconText: {
    fontSize: 20,
  },
  statTrend: {
    fontSize: 16,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '500',
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 4,
  },
  statChange: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 8,
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  periodSelector: {
    flexDirection: 'row',
    gap: 8,
  },
  periodButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  periodButtonActive: {
    backgroundColor: '#F97316',
  },
  periodButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#E9D5FF',
  },
  periodButtonTextActive: {
    color: '#FFFFFF',
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 200,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
  },
  chartBar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bar: {
    width: 20,
    backgroundColor: '#F97316',
    borderRadius: 4,
    marginBottom: 8,
  },
  barLabel: {
    fontSize: 9,
    color: '#E9D5FF',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  productLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  rankBadge: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  productSales: {
    fontSize: 11,
    color: '#E9D5FF',
  },
  productRevenue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  orderItem: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  orderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  orderIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#F97316',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderIconText: {
    fontSize: 18,
  },
  orderId: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  orderCustomer: {
    fontSize: 12,
    color: '#E9D5FF',
  },
  statusPreparing: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusReady: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusCompleted: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusDefault: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#1F2937',
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderDetails: {
    fontSize: 12,
    color: '#E9D5FF',
  },
  orderAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  primaryButton: {
    backgroundColor: '#F97316',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  alertsSection: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginTop: 24,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
  alertsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  alertIcon: {
    fontSize: 20,
  },
  alertsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  alertText: {
    fontSize: 13,
    color: '#FCA5A5',
    marginBottom: 6,
  },
  bottomPadding: {
    height: 40,
  },
});