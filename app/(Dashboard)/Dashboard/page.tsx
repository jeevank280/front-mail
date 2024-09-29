"use client";

import { useState } from "react";
import { Card, CardBody, CardHeader, Divider, Button, Progress } from "@nextui-org/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Mail, Users, Send, TrendingUp } from "lucide-react";

const data = [
  { name: 'Jan', opens: 4000, clicks: 2400 },
  { name: 'Feb', opens: 3000, clicks: 1398 },
  { name: 'Mar', opens: 2000, clicks: 9800 },
  { name: 'Apr', opens: 2780, clicks: 3908 },
  { name: 'May', opens: 1890, clicks: 4800 },
  { name: 'Jun', opens: 2390, clicks: 3800 },
];

export default function Dashboard() {
  const [selectedMetric, setSelectedMetric] = useState('opens');

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card>
          <CardBody>
            <div className="flex items-center gap-x-2">
              <span className="text-3xl font-bold text-gray-800">1,234</span>
              <span className="text-xs font-semibold text-gray-500">Subscribers</span>
            </div>
            <Users className="mt-2 text-gray-500" />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="flex items-center gap-x-2">
              <span className="text-3xl font-bold text-gray-800">89%</span>
              <span className="text-xs font-semibold text-gray-500">Open Rate</span>
            </div>
            <Mail className="mt-2 text-gray-500" />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="flex items-center gap-x-2">
              <span className="text-3xl font-bold text-gray-800">23%</span>
              <span className="text-xs font-semibold text-gray-500">Click Rate</span>
            </div>
            <Send className="mt-2 text-gray-500" />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="flex items-center gap-x-2">
              <span className="text-3xl font-bold text-gray-800">$4,567</span>
              <span className="text-xs font-semibold text-gray-500">Revenue</span>
            </div>
            <TrendingUp className="mt-2 text-gray-500" />
          </CardBody>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Email Performance</p>
            <p className="text-small text-default-500">Opens vs Clicks</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="opens" fill="#8884d8" />
                <Bar dataKey="clicks" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardBody>
      </Card>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Recent Campaigns</h3>
          </CardHeader>
          <Divider/>
          <CardBody>
            <ul className="divide-y divide-gray-200">
              <li className="py-3 flex justify-between items-center">
                <span>Summer Sale</span>
                <span className="text-green-500">Sent</span>
              </li>
              <li className="py-3 flex justify-between items-center">
                <span>New Product Launch</span>
                <span className="text-yellow-500">Scheduled</span>
              </li>
              <li className="py-3 flex justify-between items-center">
                <span>Customer Feedback</span>
                <span className="text-blue-500">Draft</span>
              </li>
            </ul>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Key Metrics</h3>
          </CardHeader>
          <Divider/>
          <CardBody>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Total Subscribers</p>
                <p className="text-2xl font-bold">10,245</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Open Rate</p>
                <p className="text-2xl font-bold">24.8%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Click-through Rate</p>
                <p className="text-2xl font-bold">3.2%</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
