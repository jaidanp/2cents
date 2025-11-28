'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calculator, Wallet, TrendingUp } from 'lucide-react';

export default function ToolsPage() {
  const [budgetIncome, setBudgetIncome] = useState(2000);
  const [budgetRent, setBudgetRent] = useState(800);
  const [budgetFood, setBudgetFood] = useState(300);
  const [budgetFun, setBudgetFun] = useState(200);
  const [budgetSavings, setBudgetSavings] = useState(200);

  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanRate, setLoanRate] = useState(5);
  const [loanPayment, setLoanPayment] = useState(200);

  const [compoundInitial, setCompoundInitial] = useState(1000);
  const [compoundMonthly, setCompoundMonthly] = useState(100);
  const [compoundYears, setCompoundYears] = useState(10);
  const [compoundRate, setCompoundRate] = useState(7);

  const budgetTotal = budgetRent + budgetFood + budgetFun + budgetSavings;
  const budgetRemaining = budgetIncome - budgetTotal;
  const savingsPercentage = budgetIncome > 0 ? (budgetSavings / budgetIncome) * 100 : 0;

  const calculateLoanPayoff = () => {
    if (loanPayment <= 0 || loanAmount <= 0 || loanRate < 0) return { months: 0, totalInterest: 0 };

    const monthlyRate = loanRate / 100 / 12;
    let balance = loanAmount;
    let months = 0;
    let totalInterest = 0;

    while (balance > 0 && months < 600) {
      const interest = balance * monthlyRate;
      const principal = Math.min(loanPayment - interest, balance);

      if (principal <= 0) break;

      totalInterest += interest;
      balance -= principal;
      months++;
    }

    return { months, totalInterest };
  };

  const calculateCompound = () => {
    const monthlyRate = compoundRate / 100 / 12;
    const months = compoundYears * 12;
    let balance = compoundInitial;

    for (let i = 0; i < months; i++) {
      balance = balance * (1 + monthlyRate) + compoundMonthly;
    }

    const totalContributions = compoundInitial + (compoundMonthly * months);
    const growth = balance - totalContributions;

    return {
      finalAmount: balance,
      totalContributions,
      growth
    };
  };

  const loanResults = calculateLoanPayoff();
  const compoundResults = calculateCompound();

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-heading font-semibold text-midnight-navy dark:text-white mb-4">
          Financial Calculators
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Try these interactive tools to see how different money decisions play out. Experiment with the numbers and learn by doing.
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Wallet className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-2xl">Budget Builder</CardTitle>
            </div>
            <CardDescription>
              Plan your monthly budget and see where your money goes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="income">Monthly Income</Label>
                  <Input
                    id="income"
                    type="number"
                    value={budgetIncome}
                    onChange={(e) => setBudgetIncome(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="rent">Rent/Housing: ${budgetRent}</Label>
                  <Slider
                    id="rent"
                    value={[budgetRent]}
                    onValueChange={(v) => setBudgetRent(v[0])}
                    max={budgetIncome}
                    step={50}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="food">Food/Groceries: ${budgetFood}</Label>
                  <Slider
                    id="food"
                    value={[budgetFood]}
                    onValueChange={(v) => setBudgetFood(v[0])}
                    max={budgetIncome}
                    step={25}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="fun">Entertainment/Fun: ${budgetFun}</Label>
                  <Slider
                    id="fun"
                    value={[budgetFun]}
                    onValueChange={(v) => setBudgetFun(v[0])}
                    max={budgetIncome}
                    step={25}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="savings">Savings: ${budgetSavings}</Label>
                  <Slider
                    id="savings"
                    value={[budgetSavings]}
                    onValueChange={(v) => setBudgetSavings(v[0])}
                    max={budgetIncome}
                    step={25}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-accent rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Budget Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Total Income:</span>
                      <span className="font-semibold">${budgetIncome.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Expenses:</span>
                      <span className="font-semibold">${budgetTotal.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between">
                      <span className="font-semibold">Remaining:</span>
                      <span className={`font-bold ${budgetRemaining >= 0 ? 'text-green-success' : 'text-red-500'}`}>
                        ${budgetRemaining.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Savings Rate:</span>
                      <span className="font-medium">{savingsPercentage.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>

                {savingsPercentage < 10 && budgetIncome > 0 && (
                  <Alert>
                    <AlertDescription>
                      Try to save at least 10% of your income. Consider reducing entertainment or other flexible expenses.
                    </AlertDescription>
                  </Alert>
                )}

                {budgetRemaining < 0 && (
                  <Alert variant="destructive">
                    <AlertDescription>
                      Your expenses exceed your income! You need to reduce spending or increase income.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calculator className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-2xl">Loan Payoff Calculator</CardTitle>
            </div>
            <CardDescription>
              See how long it will take to pay off a loan and how much interest you'll pay
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="loan-amount">Loan Amount</Label>
                  <Input
                    id="loan-amount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="loan-rate">Interest Rate (% per year)</Label>
                  <Input
                    id="loan-rate"
                    type="number"
                    value={loanRate}
                    onChange={(e) => setLoanRate(Number(e.target.value))}
                    step="0.1"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="loan-payment">Monthly Payment</Label>
                  <Input
                    id="loan-payment"
                    type="number"
                    value={loanPayment}
                    onChange={(e) => setLoanPayment(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-accent rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Payoff Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Time to Pay Off:</span>
                      <span className="font-semibold">
                        {loanResults.months > 0
                          ? `${Math.floor(loanResults.months / 12)} years, ${loanResults.months % 12} months`
                          : 'N/A'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Interest Paid:</span>
                      <span className="font-semibold">${loanResults.totalInterest.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between">
                      <span className="font-semibold">Total Amount Paid:</span>
                      <span className="font-bold text-primary">
                        ${(loanAmount + loanResults.totalInterest).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {loanResults.months > 120 && (
                  <Alert>
                    <AlertDescription>
                      This loan will take over 10 years to pay off. Consider increasing your monthly payment if possible.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-2xl">Compound Interest Calculator</CardTitle>
            </div>
            <CardDescription>
              See how your savings can grow over time with compound interest
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="compound-initial">Starting Amount</Label>
                  <Input
                    id="compound-initial"
                    type="number"
                    value={compoundInitial}
                    onChange={(e) => setCompoundInitial(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="compound-monthly">Monthly Contribution</Label>
                  <Input
                    id="compound-monthly"
                    type="number"
                    value={compoundMonthly}
                    onChange={(e) => setCompoundMonthly(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="compound-years">Years</Label>
                  <Input
                    id="compound-years"
                    type="number"
                    value={compoundYears}
                    onChange={(e) => setCompoundYears(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="compound-rate">Interest Rate (% per year)</Label>
                  <Input
                    id="compound-rate"
                    type="number"
                    value={compoundRate}
                    onChange={(e) => setCompoundRate(Number(e.target.value))}
                    step="0.1"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-accent rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Growth Projection</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Final Amount:</span>
                      <span className="font-bold text-2xl text-primary">
                        ${compoundResults.finalAmount.toFixed(2)}
                      </span>
                    </div>
                    <div className="border-t pt-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Your Contributions:</span>
                        <span className="font-medium">${compoundResults.totalContributions.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Interest Earned:</span>
                        <span className="font-medium text-green-success">
                          ${compoundResults.growth.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert className="bg-primary/10 border-primary">
                  <AlertDescription>
                    <strong>Pro tip:</strong> Starting early makes a huge difference! The longer your money has to grow, the more compound interest works in your favor.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
